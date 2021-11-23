import React, { Fragment, useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';


const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products }
]


function Menu(): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  function buildFirstLevel() {
    return (
      <Fragment>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </Fragment>
    )
  }

  function buildSecondLevel(menuItem: FirstLevelMenuItem) {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
            </div>
            
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  function buildThirdLevel(pages: PageItem[], route: string) {
    return (
      pages.map(page => (
        <a key={page._id} href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false
        })}>{page.category}</a>
      ))
    );
  }

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
}

export default Menu;
