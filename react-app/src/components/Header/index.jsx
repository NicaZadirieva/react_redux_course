import { memo, useCallback, useState } from 'react';
import Button from '../Button';
import Logo from '../Logo';
import SelectUser from '../SelectUser';



function Header() {
	const [logoIndex, setLogoIndex] = useState(0);
	const logos = ['/logo.svg', 'vite.svg'];
	console.log('Header');
	const toggleLogo = useCallback(() => {
		setLogoIndex(state => Number(!state));
	}, [setLogoIndex]);
	return (<>
		<Logo logo={logos[0]} />
		<SelectUser />
		<Button onClick={toggleLogo}>Сменить лого</Button>
	</>);
}

export default memo(Header);