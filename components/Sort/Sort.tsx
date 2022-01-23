/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Fragment } from "react";
import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "./sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortname} id='sort'>Сортировка</div>
      
      <button
        id='rating'
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating
        })}
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby='sort rating'
      >
        <SortIcon className={styles.sorticon}/>По Рейтингу
      </button>
      
      <button
        id='price'
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price
        })}
        aria-selected={sort == SortEnum.Price}
        aria-labelledby='sort price'
      >
        <SortIcon className={styles.sorticon}/>По Цене
      </button>

    </div>
  );
}
