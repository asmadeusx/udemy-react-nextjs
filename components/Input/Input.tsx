import React, { ForwardedRef, forwardRef, Fragment } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";


export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
	  	<div className={cn(styles.inputwrapper, className)}>
			<input className={cn(styles.input, {
				[styles.error]: error
			})} ref={ref} {...props}/>
			{error && <span role='alert' className={styles.errormessage}>{error.message}</span>}
		</div>
	);
});

Input.displayName = 'Input';
