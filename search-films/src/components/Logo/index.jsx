import styles from './index.module.css';

function Logo() {
	return (
		<img className={styles.logo} src='/logo-icon.svg' alt='Logo'/>
	);
}

export default Logo;