import React, { Fragment, useEffect, useReducer } from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import { Htag } from "../../components/Htag/Htag";
import { Tag } from "../../components/Tag/Tag";
import { HhData } from "../../components/HhData/HhData";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { Advantages } from "../../components/Advantages/Advantages";
import { Sort } from '../../components/Sort/Sort';
import { SortEnum } from '../../components/Sort/Sort.props';
import { SortReducer } from './sort.reducer';
import { Product } from '../../components/Product/Product';
import { useScrollY } from '../../hooks/useScrollY';
import { useReducedMotion } from 'framer-motion';

export const TopPageComponent = ({ page, products, firstCategory, ...props }: TopPageComponentProps): JSX.Element => {
  const [{products: sortedProducts, sort }, dispathSort] = useReducer(SortReducer, { products, sort: SortEnum.Rating });
  const shouldReduceMotion = useReducedMotion();
  
  const setSort = (sort: SortEnum) => {
    dispathSort({type: sort});
  }

  useEffect( () => {
    dispathSort({ type: 'reset', initialState: products})
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m" aria-label={products.length + 'элементов'}>
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort}/>
      </div>

      <div role='list' >
        {sortedProducts && sortedProducts.map((p) => <Product role='listitem' layout={shouldReduceMotion ? false : true} key={p._id} product={p}></Product>)}
      </div>

      <div className={styles.hhtitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <Fragment>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </Fragment>
      )}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={ { __html: page.seoText} }></div>}
	  <Htag tag='h2'>Получаемые Навыки</Htag>
	  {page.tags.map(t => <Tag key={t} color='primary' size='m'>{t}</Tag>)}
    </div>
  );
};
