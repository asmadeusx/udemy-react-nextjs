import React, { Fragment } from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import date from 'date-fns';


function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
	  <footer 
	  	className={cn(className, styles.footer)}
	  	{...props}
	  >
		  <div>
		  	OwlTop © 2020 - {} Все права защищены
		  </div>
		  <div>
		  	Пользовательское соглашение
		  </div>
		  <div>
			Политика конфиденциальности
		  </div>
	  </footer>
  );
}

export default Footer;
