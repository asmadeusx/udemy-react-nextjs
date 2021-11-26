import React, { Fragment } from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import HhData from "../../components/HhData/HhData";
import { TopLevelCategory } from "../../interfaces/page.interface";
import Advantages from "../../components/Advantages/Advantages";
import Paragraph from "../../components/Paragraph/Paragraph";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
  ...props
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>

      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>

      <div className={styles.hhtitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
        <span>Сортировка</span>
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
