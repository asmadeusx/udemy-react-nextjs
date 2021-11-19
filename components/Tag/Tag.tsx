import React, { Fragment } from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";


function Tag({ size, children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element {
  return (
	<div
		className={cn(styles.tag, className, {
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.ghost]: color == 'ghost',
			[styles.red]: color == 'red',
			[styles.grey]: color == 'grey',
			[styles.green]: color == 'green',
			[styles.primary]: color == 'primary',
		})}
		{...props}
	>
		{
			href ? <a href={href}>{children}</a> : <Fragment>{children}</Fragment>
		}
	</div>);
}

export default Tag;
