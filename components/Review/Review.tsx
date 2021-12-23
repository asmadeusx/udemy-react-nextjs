import React, { Fragment } from "react";
import { ReviewProps } from "./Review.props";
import styles from "./Review.module.css";
import cn from "classnames";
import UserIcon from "./userlogo.svg";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Rating } from '../Rating/Rating';

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={cn(styles.reviews, className)} {...props}>
      <UserIcon className={styles.usericon} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        <span>
          {format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
        </span>
      </div>
	  <div className={styles.rating}>
        <span>
          <Rating rating={rating}/>
        </span>
      </div>
	  <div className={styles.description}>
        <span>
          {description}
        </span>
      </div>
    </div>
  );
}
