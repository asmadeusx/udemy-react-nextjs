/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";


export const Rating = forwardRef(({ isEditable = false, error, rating, setRating, tabIndex, ...props }: RatingProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
  
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<Fragment></Fragment>));
	const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

	useEffect( () => {
		conustructRating(rating);
	}, [rating, tabIndex]);

	const computeFocus = (r: number, i: number): number => {
		if ( !isEditable ) {
			return -1;
		}
		if ( !rating && i == 0 ) {
			return tabIndex ?? 0;
		}
		if ( r == i + 1 ) {
			return tabIndex ?? 0;
		}
		return -1;
	} 

  	const conustructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map( (r: JSX.Element, i: number) => {
			return (
				<Fragment key={i}>
					<span
						className={ cn( styles.star, { 
							[styles.filled]: i < currentRating,
							[styles.editable]: isEditable
						} ) }
						onMouseEnter={ () => changeDisplay(i + 1)}
						onMouseLeave={ () => changeDisplay(rating)}
						onClick={ () => onClick(i + 1)}
						tabIndex={computeFocus(rating, i)}
						onKeyDown={handleKey}
						ref={r => ratingArrayRef.current?.push(r)}
						role={isEditable ? 'slider' : ''}
						aria-invalid={error ? true : false}
						aria-valuenow={rating}
						aria-valuemax={5}
						aria-label={isEditable ? 'Укажите  рейтинг' : ("рейтинг" + rating)}
						aria-valuemin={1}
					>
						<StarIcon/>
					</span>
				</Fragment>
			);
		});
		setRatingArray(updatedArray);
  	};
	
	function handleKey(e: KeyboardEvent) {
		if ( !isEditable || !setRating ) {
			return;
		}
		if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
			if (!rating) {
				setRating(1);
			} else {
				e.preventDefault();
				setRating(rating < 5 ? rating + 1 : 5);
			}
			ratingArrayRef.current[rating]?.focus();
		}
		if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
			e.preventDefault();
			setRating(rating > 1 ? rating - 1 : 1);
			ratingArrayRef.current[rating - 2]?.focus();
		}
	}

	function changeDisplay(i: number) {
		if (!isEditable) {
			return;
		}
		conustructRating(i);
	}

	function onClick(i: number) {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	}

	return (
	<div ref={ref} {...props} className={cn(styles.ratingwrapper, {
		[styles.error]: error
	})}> 
		{ratingArray.map( (r: JSX.Element, i: number) => {
			return (
				<span key={i}>{r}</span>
				)
			} 
			) 
		}
		{error && <span role='alert' className={styles.errormessage}>{error.message}</span>}
	</div>
	);
});

Rating.displayName = 'Rating';