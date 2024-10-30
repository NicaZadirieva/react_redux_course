import CardButton from '../CardButton';
import styles from './styles/index.module.css';
export default function JournalAdd({onClick}) {
	return (
		<CardButton className={styles['journal-add']} onClick={onClick}>
			<img src="/plus.svg"/>	Новое воспоминание
		</CardButton>
	);
}