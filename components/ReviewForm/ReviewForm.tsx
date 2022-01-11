import React, { Fragment as form } from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { IReviewForm } from './ReviewForm.interface';
import { useForm, Controller } from 'react-hook-form';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewform, className)} {...props}>
        <Input 
            {...register('name', { required: { value: true, message: 'Заполните имя' }})}
            placeholder='Имя'
            className={styles.inputname}
            error={errors.name}
        />
        <Input 
            {...register('title', { required: { value: true, message: 'Заполните заголовок' }})}
            placeholder='Заголовок отзыва'
            className={styles.inputtitle}
            error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            rules={ { required: { value: true, message: 'Укажите рейтинг' } } }
            render={ ( { field } ) => (
              <Rating 
                isEditable 
                rating={field.value} 
                ref={field.ref} 
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <TextArea 
            {...register('description', { required: { value: true, message: 'Заполните текст отзыва' }})} 
            placeholder='Текст отзыва' 
            className={styles.description}
            error={errors.description}
        />
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

ReviewForm.displayName = 'ReviewForm';
