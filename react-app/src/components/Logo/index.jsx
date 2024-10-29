import { memo } from 'react';
import styles from './styles/index.module.css';

function Logo() {
	return <img className={styles.logo} src={'/logo.svg'} alt="Логотип журнала"/>
}
export default memo(Logo);