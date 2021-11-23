import React, { Fragment } from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";


export const TopPageComponent = ({ page, products, firstCategory, ...props }: TopPageComponentProps): JSX.Element => {
  return (
	  <Fragment>
	  	{products && products.length} - {page && page.alias} - {page && page.metaTitle}
	  </Fragment>
  )
}