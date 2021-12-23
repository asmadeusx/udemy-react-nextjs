import React, { Fragment } from "react";
import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import cn from "classnames";
import { Card } from '../Card/Card';
import RateIcon from './rate.svg';
import { priceRu } from '../../helpers/helpers';


export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary, ...props }: HhDataProps): JSX.Element => {
  return (
	<div className={styles.hh}>
		<Card className={styles.count}>
			<div className={styles.title}>Все Вакансий</div>
			<div className={styles.countvalue}>{count}</div>
		</Card>
		<Card className={styles.salary}>
			<div>
				<div className={styles.title}>Начальный</div>
				<div className={styles.salaryvalue}>{priceRu(juniorSalary)}</div>
				<div className={styles.rate}>
					<RateIcon className={styles.filled}/>
					<RateIcon />
					<RateIcon />
				</div>
			</div>
			<div>
				<div className={styles.title}>Средний</div>
				<div className={styles.salaryvalue}>{priceRu(middleSalary)}</div>
				<div className={styles.rate}>
					<RateIcon className={styles.filled}/>
					<RateIcon className={styles.filled}/>
					<RateIcon />
				</div>
			</div>
			<div>
				<div className={styles.title}>Профессионал</div>
				<div className={styles.salaryvalue}>{priceRu(seniorSalary)}</div>
				<div className={styles.rate}>
					<RateIcon className={styles.filled}/>
					<RateIcon className={styles.filled}/>
					<RateIcon className={styles.filled}/>
				</div>
			</div>
		</Card>
	</div>
  	);
}
