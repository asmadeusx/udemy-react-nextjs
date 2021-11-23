import React, { Fragment } from "react";
import { CardProps } from "./HhData.props";
import styles from "./Card.module.css";
import cn from "classnames";


function Card({ color = 'white', children, className, ...props }: CardProps): JSX.Element {
  return (
	  <div 
	  className={cn(styles.card, className, {
			[styles.blue]: color == 'blue'
	  })}
	  {...props}
	  >
		  {children}
	  </div>
  	);
}

export default Card;
