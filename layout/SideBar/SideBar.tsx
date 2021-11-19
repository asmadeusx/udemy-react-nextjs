import React, { Fragment } from "react";
import { SideBarProps } from "./SideBar.props";
import styles from "./Layout.module.css";
import cn from "classnames";


function SideBar({ ...props }: SideBarProps): JSX.Element {
  return (
	  <div {...props}>
		  SideBar
	  </div>
  );
}

export default SideBar;
