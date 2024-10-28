import { CssUtils } from '../shared/utils';
import styles from './styles/index.module.css';

export default function CardButton({children, className}) {
	const cl = CssUtils.addClassToClassNameProperty(styles['card-button'], className);

	return (
		<button className={cl}>
			{children}
		</button>
	);
}