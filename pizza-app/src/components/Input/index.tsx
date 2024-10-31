import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './index.module.css';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ isValid = true, className, ...props} : InputProps, ref) {
	return (
		<input ref={ref} {...props} className={cn(styles['input'], className, {
			[styles['invalid']]: isValid == false
		})}/>
	);
});

export default Input;