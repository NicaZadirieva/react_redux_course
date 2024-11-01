import cs from 'classnames';
import styles from './index.module.css';

/**
 * @callback eventHandler
 * @param {SyntheticBaseEvent} event
 * @returns {any}
 */

/**
 * Util LinkedMenuItem component 
 * @param {string} text - menu item text
 * @param {string} linkUrl - menu item link
 * @param {Object} icon - (optional) icon image
 * @param {string} icon.type - (svg/iconText) type of icon to display (please "*.svg")
 * @param {string} icon.dataSource - text to display if type == "iconText" or url (please "*.svg") if type == "svg" 
 * @param {boolean} canChoose - (byDefault=true) enable menu item to be clicked
 * @param {eventHandler} onClick - (optional, enabled if canChoose) function to handle clicks on menu button
 * @returns {component} MenuItem 
 * 
*/
function LinkedMenuItem(props) {

	const {canChoose=/*byDefault*/true} = props;
	
	const createIconItem = (icon) => {
		
		if(icon && icon.type == 'svg') {
			return <img className={styles['menu-item-icon']} alt="Icon" src={icon.dataSource}/>;
		}
		if(icon && icon.type == 'iconText') {
			
			return <span className={cs(
				styles['menu-item-icon'], 
				styles['rounded-text-icon'])}>{icon.dataSource}</span>;
		}
		/**wrong format of icon object or icon not present */
		return;
	};

	const iconItem = createIconItem(props.icon);

	const onMenuClick = (e) =>{
		const handleEnabled = props.onClick && canChoose;
		if(handleEnabled) {
			props.onClick(e);
		}
	};

	return (
		<li className={cs(styles['menu-item'], {[styles['can-choose']]: canChoose})} onClick={onMenuClick}>
			<a href={props.linkUrl} className={cs(styles['menu-link'], {[styles['disable']]: canChoose == false})}>
				{props.text} {iconItem}
			</a>
		</li>
	);
}

export default LinkedMenuItem;