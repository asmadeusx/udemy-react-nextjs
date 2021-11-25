import React, { Fragment } from "react";
import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import cn from "classnames";
import CheckIcon from './check.svg';


function Advantages({ advantages, ...props }: AdvantagesProps): JSX.Element {
  return (
	<Fragment>
		{advantages.map(a => (
			<div key={a._id} className={styles.advantage}>
				<CheckIcon/>
				<div className={styles.title}>{a.title}</div>
				<hr className={styles.vline}/>
				<div className={styles.description}>{a.description}</div>
			</div>
		))}
	</Fragment>
  	);
}

export default Advantages;
