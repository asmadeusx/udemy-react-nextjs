/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Fragment, useContext, KeyboardEvent, useState } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/page.interface";
import Link from "next/link";
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: { 
      marginBottom: 0,
    },
  }

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 26,
    },
    hidden: { 
      opacity: 0,
      height: 0,
    },
  }

  function openSecondLevel(secondCategory: string) {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory == secondCategory) {
        setAnnounce(m.isOpened ? 'closed' : 'opened')
        m.isOpened = !m.isOpened;
      }
      return m;
    }))
  }

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  }

  function buildFirstLevel() {
    return (
      <ul className={styles.firstlevellist}>
        {firstLevelMenu.map((m) => (
          <li key={m.route} aria-expanded={m.id == firstCategory}>
            <Link href={`/${m.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id == firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </li>
        ))}
      </ul>
    );
  }

  function buildSecondLevel(menuItem: FirstLevelMenuItem) {
    return (
      <ul className={styles.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>

              <button
                onKeyDown={(key: KeyboardEvent) => {openSecondLevelKey(key, m._id.secondCategory)}} 
                className={styles.secondLevel} 
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >{m._id.secondCategory}</button>

              <motion.ul
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={styles.secondLevelBlock}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.ul>
              
            </li>
          )})
        }
      </ul>
    );
  }

  function buildThirdLevel(pages: PageItem[], route: string, isOpened: boolean) {
    return pages.map((page) => (
      <motion.li 
        key={page._id}
        variants={variantsChildren}
      >
        <Link href={`/${route}/${page.alias}`}>
          <a
            tabIndex={isOpened ? 0 : -1}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath,
            })}
            aria-current={`/${route}/${page.alias}` == router.asPath ? 'page' : false}
          >
            {page.category}
          </a>
        </Link>
      </motion.li>
    ));
  }

  return (
    <nav className={styles.menu} role='navigation'>
      {announce && <span role='log' className='visualyhidden'>{announce == 'opened' ? 'Развернуто' : 'Свернуто'}</span>}
      {buildFirstLevel()}
    </nav>
    );
}
