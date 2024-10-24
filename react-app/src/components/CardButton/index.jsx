import { CssUtils } from '../shared/utils';
import styles from './styles/index.module.css';

export default function CardButton({children, className}) {
	console.log(styles['card-button']);
	const cl = CssUtils.addClassToClassNameProperty(styles['card-button'], className);
	console.log(cl);
	return (
		<button className={cl}>
			{children}
		</button>
	);
}