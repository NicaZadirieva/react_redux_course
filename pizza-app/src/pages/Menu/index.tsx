import Heading from '../../components/Heading';
import Search from '../../components/Search';
import styles from './index.module.css';

function Menu() {
	return (
		<>
			<div className={styles['head']}>
				<Heading>Menu</Heading>
				<Search placeholder='Введите блюдо или состав'/>
			</div>
		</>
	);
}

export default Menu;