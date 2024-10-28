import { useState } from 'react';
import Button from '../Button';
import SelectUser from '../SelectUser';
import styles from './styles/index.module.css';

const logos = ['/logo.svg', 'vite.svg'];

export default function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};
	return (<>
		<img className={styles.logo} src={logos[logoIndex]} alt="Логотип журнала"/>
		<SelectUser />
		<Button onClick={toggleLogo}>Сменить лого</Button>
	</>);
}