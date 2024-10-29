import { memo } from 'react';
import Logo from '../Logo';
import SelectUser from '../SelectUser';



function Header() {
	return (<>
		<Logo />
		<SelectUser />
	</>);
}

export default memo(Header);