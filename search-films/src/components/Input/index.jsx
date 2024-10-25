import cs from 'classnames';
import { forwardRef } from 'react';
import styles from './index.module.css';


/**
 * Input util component (can have all props for input DOM element)
 * @param {string} className - additional CSS class
 * @param {string} inputValue - changeable value
 * @param {eventHandler} onChange handler for change event
 * @param {boolean} hasIcon (byDefault=false) true if has an icon
 * @param {string} iconClassName additional CSS class for icon (used for setting icon image)
 * 
 */
const Input = forwardRef(function Input({className, inputValue, onChange, hasIcon=false, iconClassName, ...props}, ref) {
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

