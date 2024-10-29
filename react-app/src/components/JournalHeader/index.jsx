import cs from 'classnames';
import styles from './styles/index.module.css';

export default function JournalHeader({className, text}) {
	return (
		<div className={cs(className, styles['journal-header'])}>
			<h2 className={styles['journal-header__text']}>
				{text}
			</h2>
			<button className={styles['journal-header__delete-btn']}></button>
		</div>
	);
}