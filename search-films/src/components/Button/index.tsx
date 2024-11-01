import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './index.module.css';

function Button({children, className, ...props}: ButtonProps) {
	return (
		<button {...props} className={cn(className, styles.button)}>{children}</button>
	);
}

export default Button;