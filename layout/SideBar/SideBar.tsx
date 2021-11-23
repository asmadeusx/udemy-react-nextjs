import React, { Fragment } from "react";
import { SideBarProps } from "./SideBar.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import Menu from '../Menu/Menu';


function SideBar({ ...props }: SideBarProps): JSX.Element {
  return (
	  <div {...props}>
		  <Menu/>
	  </div>
  );
}

export default SideBar;
