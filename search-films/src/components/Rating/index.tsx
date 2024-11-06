import styles from './index.module.css';
import { RatingProps } from './Rating.props';

export default function Rating({value} : RatingProps) {
	return (
		<div className={styles['rating']}>
			<img alt='Иконка рейтинга' src='star-icon.svg'/>
			<div className={styles['rating-value']}>{value}</div>
		</div>
	);
}