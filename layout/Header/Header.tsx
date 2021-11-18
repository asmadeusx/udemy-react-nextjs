import React, { Fragment } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";


function Header({ ...props }: HeaderProps): JSX.Element {
  return (
	  <Header { ...props }>
		  Header
	  </Header>
  );
}

export default Header;
