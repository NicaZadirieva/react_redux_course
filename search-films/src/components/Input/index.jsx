import cs from 'classnames';
import { forwardRef } from 'react';
import styles from './index.module.css';

/**
 * Input util component (can have all props for input DOM element)
 * @param {string} className additional CSS class
 * @inputValue {string} input changeable value
 * @callback {function} onChange handler for change event
 */
const Input = forwardRef(function Input({className, inputValue, onChange, hasIcon, iconClassName, ...props}, ref) {
	return (
		<div className={cs({[styles['icon']]: /*display search icon*/ hasIcon, 
			[iconClassName]: hasIcon})}>
			<input ref={ref} {...props} className={cs(styles['input'], className)}
				value={inputValue} 
				onChange={onChange} />
		</div>
	);
});

export default Input;

