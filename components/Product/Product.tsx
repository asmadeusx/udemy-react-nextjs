import React, { ForwardedRef, forwardRef, Fragment, useRef, useState } from "react";
import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import Image from "next/image";
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/display-name
export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: { opacity: 1, height: "auto", },
    hidden: { opacity: 0, height: 0, }
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView( 
      { 
        behavior: 'smooth',
        block: 'start'
      }
    );
  };

  return (
    <div className={className} {...props} ref={ref}>
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
          {product.oldPrice && (
            <Tag className={styles.oldprice} color="green" size="m">
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {priceRu(product.credit)}
          <span className={styles.month}>/мес</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((c) => (
            <Tag className={styles.category} key={c} color="ghost">
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.pricetitle}>цена</div>
        <div className={styles.credittitle}>в кредит</div>
        <div className={styles.ratingtitle}>
          <a 
            href='#ref'
            onClick={scrollToReview}
          >
            {product.reviewCount}
            {declOfNum(product.reviewCount, [" отзыв", " отзыва", " отзывов"])}
          </a>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((c) => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsname}>{c.name}</span>
              <span className={styles.characteristicsdots}></span>
              <span className={styles.characteristicsvalue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advblock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advtitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.disadvtitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button apperance="primary">Узнать подробнее</Button>
          <Button
            apperance="ghost"
            arrow={isReviewOpened ? 'down' : 'right'}
            className={styles.reviewbutton}
			      onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <motion.div animate={isReviewOpened ? 'visible' : 'hiiden'} variants={variants} initial={'hidden'}>
        <Card
          color="blue"
          className={styles.reviews}
          ref={reviewRef}
        >
        <div>
          {product.reviews.map((r) => (
            <Fragment key={r._id} >
              <Review review={r}/>
              <Divider/>
            </Fragment>
          ))}
          <ReviewForm productId={product._id}/>
        </div>
        </Card>
      </motion.div>
    </div>
  );

}));

Product.displayName = 'Product';