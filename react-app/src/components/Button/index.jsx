import styles from './styles/index.module.css';

export default function Button({children, onClick}) {

	return (
		<button onClick={onClick} className={`${styles.button} ${styles.accent}`}>{children}</button>
	);
}