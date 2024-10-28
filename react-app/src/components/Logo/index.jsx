import { memo } from 'react';
import styles from './styles/index.module.css';

function Logo({logo}) {
	return <img className={styles.logo} src={logo} alt="Логотип журнала"/>
}
export default memo(Logo);