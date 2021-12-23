import React, { ForwardedRef, forwardRef, Fragment } from "react";
import { TextAreaProps } from "./TextArea.props";
import styles from "./TextArea.module.css";
import cn from "classnames";


export const TextArea = forwardRef(({ className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
	  <textarea 
	  		className={cn(className, styles.textarea)}
			ref={ref}
			{...props}
	/>
	);
});

TextArea.displayName = 'TextArea';
