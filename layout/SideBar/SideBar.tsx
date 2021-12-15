import React, { Fragment } from "react";
import { SideBarProps } from "./SideBar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Menu from '../Menu/Menu';
import Logo from '../logo.svg';
import Search from '../../components/Search/Search';


function SideBar({ className, ...props }: SideBarProps): JSX.Element {
  return (
	  <div className={cn(className, styles.sideBar)} {...props}>
		  <Logo className={styles.logo}/>
		  <Search/>
		  <Menu/>
	  </div>
  );
}

export default SideBar;
