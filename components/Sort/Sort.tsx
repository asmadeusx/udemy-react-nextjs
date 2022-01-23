import React, { Fragment } from "react";
import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "./sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating
        })}
      >
        <SortIcon className={styles.sorticon}/>По Рейтингу
      </button>
      
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price
        })}
      >
        <SortIcon className={styles.sorticon}/>По Цене
      </button>

    </div>
  );
}
