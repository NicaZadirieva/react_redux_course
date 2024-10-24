import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './index.module.css';

const Input = forwardRef(function Input({ isValid = true, appearance, ...props}, ref) {
	return (
		<input ref={ref} {...props} className={cn(styles['input'], {
			[styles['invalid']]: isValid == false,
			[styles['input-title']]: appearance === 'title'
		})}/>
	);
});

export default Input;