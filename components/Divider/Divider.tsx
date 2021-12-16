/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { DividerProps } from "./Divider.props";
import styles from "./Divider.module.css";
import cn from "classnames";

function Divider({ className, ...props }: DividerProps): JSX.Element {
  return (
	  <hr className={cn(styles.hr, className)} {...props}/>
  	)
}

export default Divider;
