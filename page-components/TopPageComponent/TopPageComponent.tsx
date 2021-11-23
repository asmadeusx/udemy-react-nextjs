import React, { Fragment } from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import Htag from '../../components/Htag/Htag';
import Tag from '../../components/Tag/Tag';
import Card from '../../components/Card/Card';


export const TopPageComponent = ({ page, products, firstCategory, ...props }: TopPageComponentProps): JSX.Element => {
  return (
	  <div className={styles.wrapper}>
		  <div className={styles.title}>
			  <Htag tag='h1'>{page.title}</Htag>
			  {products && <Tag color='grey' size='m'>{products.length}</Tag>}
			  <span>Сортировка</span>
		  </div>
		  
		  <div>
			  {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
		  </div>
		  
		  <div className={styles.hhtitle}>
			  <Htag tag='h2'>Вакансии - {page.category}</Htag>
			  <Tag color='red' size='m'>hh.ru</Tag>
			  <span>Сортировка</span>
		  </div>

		  <div className={styles.hh}>
			  <Card className={styles.hhcount}>
				  <div className={styles.hhstattitle}>Все Вакансий</div>
				  <div className={styles.hhstatcount}>{page.hh.count}</div>
			  </Card>

		  </div>
	  </div>
  )
}