import { CssUtils } from '../shared/utils';
import styles from './styles/index.module.css';

function CardButton({children, className, ...props}) {
	const cl = CssUtils.addClassToClassNameProperty(styles['card-button'], className);

	return (
		<button className={cl} {...props}>
			{children}
		</button>
	);
}

export default CardButton;