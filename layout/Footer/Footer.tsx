import React, { Fragment } from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";


function Footer({ ...props }: FooterProps): JSX.Element {
  return (
	  <div {...props}>
		  Footer
	  </div>
  );
}

export default Footer;
