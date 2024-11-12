import { Outlet } from 'react-router-dom';
import Content from '../Content';
import Header from '../Header';

function MenuLayout() {
	return (
		<>
			<Header />
			<Content>
				<Outlet/>
			</Content>
		</>
	);
}

export default MenuLayout;