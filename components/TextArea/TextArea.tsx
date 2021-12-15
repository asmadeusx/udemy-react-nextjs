import React, { Fragment } from "react";
import { TextAreaProps } from "./TextArea.props";
import styles from "./TextArea.module.css";
import cn from "classnames";


function TextArea({ className, ...props }: TextAreaProps): JSX.Element {
  return (
	  <textarea className={cn(className, styles.textarea)} {...props}></textarea>
	)
}

export default TextArea;
