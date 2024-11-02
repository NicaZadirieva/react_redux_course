import cs from 'classnames';
import { FormEvent, forwardRef } from 'react';
import Button from '../Button';
import styles from './index.module.css';
import { InputFormField, InputProps } from './Input.props';

/**
 * @callback requestCallback
 * @param {Object} requestBody
 * @param {string} requestBody.textToAction - (byDefault='') text to do action with
 * @returns {any}
 */

/**
 * Util Input component 
 * @param {string} placeholder - input's placeholder
 * @param {string} position - (optional, byDefault='vertical') vertical/horizontal
 * @param {requestCallback} onSubmit - callback to do request after submit
 * @param {string} inputActionName - action name to display on button search
 * @param {boolean} hasIcon (optional, byDefault=false) - display icon
 * @param {string} iconClassName additional CSS class for icon (used for setting icon image)
 * @param {Object} ref (optional, byDefault=null) - to be focused after submit
 * @returns {component} Input 
 * 
*/
const Input = forwardRef<HTMLInputElement>((props, ref) => {
	const {className, inputActionName, iconClassName, position=/*byDefault=*/'vertical', hasIcon=/*byDefault=*/false} = props as InputProps;
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = (e.target as HTMLFormElement);
		const inputValue = (target.elements as InputFormField).textToAction.value;
		(props as InputProps).onSend(inputValue);
	};
    
	return (
		<form className={cs(styles['input-container'], {
			[styles.horizontal]: position == 'horizontal', 
			[styles.vertical]: position != 'horizontal'
		})} onSubmit={onSubmit}>
			<div className={cs({[styles['icon']]: /*display search icon*/ hasIcon, 
				[styles[iconClassName]]: hasIcon})}>
				<input name='textToAction' ref={ref} {...props} className={cs(styles['input'], className)} />
			</div>

			<Button>{inputActionName}</Button>
		</form>
	);
});

export default Input;