import React, { Fragment } from "react";
import { ButtonIconProps, icons } from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";

export const ButtonIcon = ({ apperance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon];

  return (
      <button 
        className={cn(styles.button, className, {
          [styles.primary]: apperance == 'primary',
          [styles.white]: apperance == 'white',
        })}
        {...props}
      >
        <IconComponent />
      </button>
  );
}
