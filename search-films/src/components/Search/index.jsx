import cs from 'classnames';
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import styles from './index.module.css';

/**
 * @callback requestCallback
 * @param {Object} requestBody
 * @param {string} requestBody.textToSearch - (byDefault='') text to do search action with
 * @returns {any}
 */

/**
 * Util Search component 
 * @param {string} placeholder - input's placeholder
 * @param {string} position - (optional, byDefault='vertical') vertical/horizontal
 * @param {requestCallback} onSearch - callback to do search request
 * @param {string} searchActionName - action name to display on button search
 * @param {boolean} hasSearchIcon (optional, byDefault=false) - display search icon
 * @returns {component} Search 
 * 
*/
function Search(props) {

	const {position=/*byDefault=*/'vertical', hasSearchIcon=/*byDefault=*/false} = props;

	let [searchText, setSearchText] = useState(/*byDefault=*/'');
	const inputChange = (event) => {
		setSearchText(event.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		props.onSearch(formProps);
	};
    
	return (
		<form className={cs(styles.search, {
			[styles.horizontal]: position == 'horizontal', 
			[styles.vertical]: position != 'horizontal'
		})} onSubmit={onSubmit}>

			<Input ref={null} type="search"  
				name="textToSearch"
				placeholder={props.placeholder}  
				inputValue={searchText} 
				onChange={inputChange} 
				hasIcon={hasSearchIcon}
				iconClassName={styles['icon-search']} />

			<Button text={props.searchActionName}/>
		</form>
	);
}

export default Search;