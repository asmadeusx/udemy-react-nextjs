/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import Card from '../Card/Card';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import Divider from '../Divider/Divider';
import Image from 'next/image';


function Product({ product, children, ...props }: ProductProps): JSX.Element {
  return (
	  <Card className={styles.product}>
		  <div className={styles.logo}>
			  <Image 
			  		src={process.env.NEXT_PUBLIC_DOMAIN + product.image} 
					alt={product.title}
					width={70}
					height={70}
			  />
		  </div>
		  <div className={styles.title}>{product.title}</div>
		  <div className={styles.price}>
			  {priceRu(product.price)}
			  {product.oldPrice && <Tag className={styles.oldprice} color='green' size='m'>{priceRu(product.price - product.oldPrice)}</Tag>}
		  </div>
		  <div className={styles.credit}>
			  {priceRu(product.credit)}<span className={styles.month}>/мес</span>
		  </div>
		  <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
		  <div className={styles.tags}>{product.categories.map( (c) => <Tag className={styles.category} key={c} color='ghost'>{c}</Tag> )}</div>
		  <div className={styles.pricetitle}>цена</div>
		  <div className={styles.credittitle}>в кредит</div>
		  <div className={styles.ratingtitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
		  <Divider className={styles.hr}/>
		  <div className={styles.description}>{product.description}</div>
		  <div className={styles.feature}>
			  {product.characteristics.map( (c) => (
				  <div className={styles.characteristics} key={c.name}>
					  <span className={styles.characteristicsname}>{c.name}</span>
					  <span className={styles.characteristicsdots}></span>
					  <span className={styles.characteristicsvalue}>{c.value}</span>
				  </div>
			  ))}
		  </div>
		  <div className={styles.advblock}>
		  	  {product.advantages && <div className={styles.advantages}>
				  <div className={styles.advtitle}>Преимущества</div>
				  <div>{product.advantages}</div>
			  </div>}
			  {product.disadvantages && <div className={styles.disadvantages}>
				  <div className={styles.disadvtitle}>Недостатки</div>
				  <div>{product.disadvantages}</div>
			  </div>}
		  </div>
		  <Divider className={styles.hr}/>
		  <div className={styles.actions}>
			  <Button apperance='primary'>Узнать подробнее</Button>
			  <Button apperance='ghost' arrow={'right'} className={styles.reviewbutton}>Читать отзывы</Button>
		  </div>
	  </Card>
  	)
}

export default Product;
