import React, { Fragment, FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Footer from './Footer/Footer';


const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
	  <Fragment>
		  <Header />
		  <div>
			  <SideBar />
			  <div>
				  {children}
			  </div>
		  </div>
		  <Footer />
	  </Fragment>
  );
}

export const withLayout = <T extends Record<string, unknown> >(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
