import React, { Fragment } from "react";
import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";


function Product({ product, children, ...props }: ProductProps): JSX.Element {
  return (
	  <div>
		  {product.title}
	  </div>
  	)
}

export default Product;
