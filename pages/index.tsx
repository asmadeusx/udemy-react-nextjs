import React, { Fragment } from 'react';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import Paragraph from '../components/Paragraph/Paragraph';
import Tag from '../components/Tag/Tag';

export default function Home(): JSX.Element {
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
    </Fragment>
  );
};
