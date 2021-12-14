import React, { Fragment, useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import Paragraph from '../components/Paragraph/Paragraph';
import Tag from '../components/Tag/Tag';
import Rating from '../components/Rating/Rating';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import Input from '../components/Input/Input';

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(0);

  return (
    <Fragment>

      <Htag tag="h1"> Текст H1 </Htag>
      <Htag tag="h2"> Текст H2 </Htag>
      <Htag tag="h3"> Текст H3 </Htag>

      <Button apperance="primary" arrow="right">Кнопка</Button>
      <Button apperance="ghost" arrow="down">Кнопка</Button>

      <Paragraph size='s'>Некоторый Маленький Параграф </Paragraph>
      <Paragraph size='m'>Некоторый Средний Параграф </Paragraph>
      <Paragraph size='l'>Некоторый Большой Параграф </Paragraph>

      <Tag size='s'>Маленький Тэг</Tag>
      <Tag size='m' color='red'>Средний Красный Тэг</Tag>
      <Tag size='m' color='green'>Средний Зеленый Тэг</Tag>

      <Htag tag="h1"> Каунтер : {counter}</Htag>
      <Button apperance="primary" onClick={() => setCounter(x => x+1)}> Увеличить Каунт </Button>

      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      
      <Input placeholder='тест'/>

    </Fragment>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
