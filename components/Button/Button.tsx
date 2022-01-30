import React, { Fragment } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";
import { motion, useMotionValue } from 'framer-motion';

export const Button = ({ children, apperance, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {
  return (
    <Fragment>
      <motion.button 
        whileHover={ {scale:1.05} }
        className={cn(styles.button, className, {
          [styles.primary]: apperance == 'primary',
          [styles.ghost]: apperance == 'ghost',
        })}
        {...props}
      >
        {children}
        {arrow != 'none' && <span className={cn(styles.arrow, {
          [styles.down]: arrow == 'down'}
          )}> <ArrowIcon /> </span>}
      </motion.button>
    </Fragment>
  );
}
