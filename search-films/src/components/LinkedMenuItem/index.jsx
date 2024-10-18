import { default as CssUtils } from '../shared/CssUtils';
import './styles/index.css';
/**TODO: (me) исправить, чтобы информация о параметрах onClick появлялась в JSDoc.*/
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
	const {canChoose=true} = props;
	const createIconItem = (icon) => {
		const defaultIconClassName = 'menu-item-icon';

		if(icon && icon.type == 'svg') {
			return <img className="menu-item-icon" alt="Icon" src={icon.dataSource}/>;
		}
		if(icon && icon.type == 'iconText') {

			const roundedIconClassName = CssUtils.addClassToDefaultClassName(
				defaultIconClassName, 
				'rounded-text-icon');

			return <span className={roundedIconClassName}>{icon.dataSource}</span>;
		}
		/**wrong format of icon object or icon not present */
		return;
	};

	const iconItem = createIconItem(props.icon);
	const defaultMenuItemClassName = 'menu-item';
	const menuItemClassName = canChoose ? (
	/*byDefault*/ CssUtils.addClassToDefaultClassName(defaultMenuItemClassName, 'can-choose')) : defaultMenuItemClassName;
	const onMenuClick = (e) =>{
		const handleEnabled = props.onClick && canChoose;
		if(handleEnabled) {
			props.onClick(e);
		}
	};
	const defaultLinkClassName = 'menu-link';
	const disabledLink = CssUtils.addClassToDefaultClassName(defaultLinkClassName, 'disable');
	const linkClassName = canChoose ? /*enable link byDefault*/ defaultLinkClassName : disabledLink;
	return (
		<li className={menuItemClassName} onClick={onMenuClick}>
			<a href={props.linkUrl} className={linkClassName}>{props.text} {iconItem}</a>
			
		</li>
	);
}

export default LinkedMenuItem;