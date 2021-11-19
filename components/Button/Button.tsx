import React, { Fragment } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

function Button({ children, apperance, arrow = 'none', className, ...props }: ButtonProps): JSX.Element {
  return (
    <Fragment>
      <button className={cn(styles.button, className, {
        [styles.primary]: apperance == 'primary',
        [styles.ghost]: apperance == 'ghost',
      })}
        {...props}
      >
        {children}
        {arrow != 'none' && <span className={cn(styles.arrow, {
          [styles.down]: arrow == 'down'}
          )}> <ArrowIcon /> </span>}
      </button>
    </Fragment>
  );
}

export default Button;
