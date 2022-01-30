import React, { Fragment } from "react";
import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";


export const Paragraph = ({ children, size = "m", className, ...props }: ParagraphProps): JSX.Element => {
  return (
  	<p 
  		className={cn(styles.p, className, {
			  [styles.s]: size == 's',
			  [styles.m]: size == 'm',
			  [styles.l]: size == 'l',
		  })}
		  {...props}
	>
		{children} 
	</p>)
}
