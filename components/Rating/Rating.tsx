/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";


export const Rating = forwardRef(({ isEditable = false, error, rating, setRating, ...props }: RatingProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
  
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<Fragment></Fragment>));

	useEffect( () => {
		conustructRating(rating);
	}, [rating]);

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
					>
						<StarIcon 
							tabIndex={isEditable ? 0 : -1}
							onKeyDown={ (e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e) }
						/>
					</span>
				</Fragment>
			);
		});
		setRatingArray(updatedArray);
  	};
	
	function handleSpace(i: number, e: KeyboardEvent<SVGElement>) {
		if(e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
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
		{error && <span className={styles.errormessage}>{error.message}</span>}
	</div>
	);
});

Rating.displayName = 'Rating';