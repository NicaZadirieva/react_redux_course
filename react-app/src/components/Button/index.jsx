import { memo } from 'react';
import styles from './styles/index.module.css';
function Button({children, onClick}) {

	return (
		<button onClick={onClick} className={`${styles.button} ${styles.accent}`}>{children}</button>
	);
}

export default memo(Button);