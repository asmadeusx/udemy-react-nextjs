import React, { ForwardedRef, forwardRef, Fragment } from "react";
import { TextAreaProps } from "./TextArea.props";
import styles from "./TextArea.module.css";
import cn from "classnames";


export const TextArea = forwardRef(({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
	  <div className={cn(styles.textareawrapper, className)}>
	  	<textarea className={cn(styles.textarea, {
			  [styles.error]: error
		  })} ref={ref} {...props} />
		{error && <span role='alert' className={styles.errormessage}>{error.message}</span>}
	  </div>
	);
});

TextArea.displayName = 'TextArea';
