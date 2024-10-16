import styles from './styles/index.module.css';

export default function Button({text, onClick}) {

	return (
		<button onClick={onClick} className={`${styles.button} ${styles.accent}`}>{text}</button>
	);
}