import cs from 'classnames';
import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import { IconImage } from '../shared/MenuIconBuilder';
import styles from './index.module.css';
import { LinkedMenuItemProps } from './LinkedMenuItem.props';

function LinkedMenuItem(props: LinkedMenuItemProps) {

	const createIconItem = (icon?: IconImage) => {
		
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

	const onMenuClick : MouseEventHandler<HTMLDivElement | HTMLLIElement> = (e) =>{
		if(props.handleClicks) {
			props.handleClicks(e);
		}
	};

	if (props.linkUrl) {
		return (
			<NavLink to={props.linkUrl}  className={({isActive}) => {
				return cs(styles['menu-item'], {[styles['is-active']]: isActive});
			}}>
				<div onClick={onMenuClick} className={styles['menu-link']}>{props.text} {iconItem}</div>
			</NavLink>
		);
	} else {
		return (
			<li className={cs(styles['menu-item'], styles['is-active'])} onClick={onMenuClick}>
				<div className={cs(styles['menu-link'])}>
					{props.text} {iconItem}
				</div>
			</li>
		);
	}
		

	;
}

export default LinkedMenuItem;