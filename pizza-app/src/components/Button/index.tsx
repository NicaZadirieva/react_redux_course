import cn from 'classnames';
import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './index.module.css';


export const ButtonAlt: FC<ButtonProps> = ({children, className, ...props}) => {
    return <button {...props} className={cn(styles.button, styles.accent, className)}>{children}</button>
};
function Button({children, className, ...props}: ButtonProps) {
	return (
		<button {...props} className={cn(styles.button, styles.accent, className)}>{children}</button>
	);
}

export default Button;