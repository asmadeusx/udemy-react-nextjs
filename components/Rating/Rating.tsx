import React, { Fragment, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";


function Rating({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element {
  
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<Fragment></Fragment>));

	useEffect( () => {
		conustructRating(rating);
	}, [rating]);

  	const conustructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map( (r: JSX.Element, i: number) => {
			return (
				<Fragment key={i}>
					<StarIcon className={ cn( styles.star, { [styles.filled]: i < currentRating } ) }/>
				</Fragment>
			);
		});
		setRatingArray(updatedArray);
  	};
	
	return (
	<div {...props}> 
		{ratingArray.map( (r: JSX.Element, i: number) => {
			return (
				<span key={i}>{r}</span>
				)
			} 
			) 
		}
	</div>
	);
}

export default Rating;
