import React, { Fragment as form } from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import CloseIcon from './close.svg';
import { IReviewForm } from './ReviewForm.interface';
import { useForm, Controller } from 'react-hook-form';

function ReviewForm({ productId, className, ...props }: ReviewFormProps): JSX.Element {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewform, className)} {...props}>
        <Input {...register('name')} placeholder='Имя' className={styles.inputname}/>
        <Input {...register('title')} placeholder='Заголовок отзыва' className={styles.inputtitle}/>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            render={ ( { field } ) => (
              <Rating isEditable rating={field.value} setRating={field.onChange}/>
            )}
          />
        </div>
        <TextArea {...register('description')} placeholder='Текст отзыва' className={styles.description}/>
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
    </form>
  );
}

export default ReviewForm;
