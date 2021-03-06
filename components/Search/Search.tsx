import React, { Fragment, KeyboardEvent, useState } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/router';


export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			goToSearch
		}
	}

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		})
	};
	
	return (
	  <form className={cn(className, styles.search)} {...props} role='Search'>
		  <Input
		  		className={styles.input}
		  		placeholder='Поиск...'
			  	value={search}
				onChange={(event) => setSearch(event.target.value)}
				onKeyDown={handleKeyDown}
		  />
		  <Button
		  		apperance='primary'
		  		className={styles.button}
				onClick={goToSearch}
				aria-label='Искать по сайту'
		  >
			  <GlassIcon className={styles.glassicon}/>
		  </Button>
	  </form>
  	)
}
