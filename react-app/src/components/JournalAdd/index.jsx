import CardButton from '../CardButton';
import styles from './styles/index.module.css';
export default function JournalAdd() {
	return (
		<CardButton className={styles['journal-add']}>
			<img src="/plus.svg"/>	Новое воспоминание
		</CardButton>
	);
}