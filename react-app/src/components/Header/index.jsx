import { useState } from 'react';
import Button from '../Button';
import Logo from '../Logo';
import SelectUser from '../SelectUser';

const logos = ['/logo.svg', 'vite.svg'];

export default function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};
	return (<>
		<Logo logo={logos[logoIndex]} />
		<SelectUser />
		<Button onClick={toggleLogo}>Сменить лого</Button>
	</>);
}