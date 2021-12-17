import React, { Fragment } from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import CloseIcon from './close.svg';

function ReviewForm({ productId, className, ...props }: ReviewFormProps): JSX.Element {
  return (
    <Fragment>
      <div className={cn(styles.reviewform, className)} {...props}>
        <Input placeholder='Имя' className={styles.inputname}/>
        <Input placeholder='Заголовок отзыва' className={styles.inputtitle}/>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0}/>
        </div>
        <TextArea placeholder='Текст отзыва' className={styles.description}/>
        <div className={styles.submit}>
          <Button apperance='primary'>Отправить</Button>
          <span className={styles.info}>* перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successtitle}>Ваш отзыв отправлен.</div>
        <div>Спасибо! Ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.closeicon}/>
      </div>
    </Fragment>
  );
}

export default ReviewForm;
