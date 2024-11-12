import cs from 'classnames';
import { MouseEventHandler } from 'react';
import { IconImage } from '../shared/MenuIconBuilder';
import styles from './index.module.css';
import { SimpleMenuItemProps } from './SimpleMenuItem.props';

function SimpleMenuItem(props: SimpleMenuItemProps) {

	const {canChoose=/*byDefault*/true} = props;
	
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

	const onMenuClick : MouseEventHandler<HTMLLIElement> = (e) =>{
		if(props.handleClicks && canChoose) {
			props.handleClicks(e);
		}
	};

	return (
		<li className={cs(styles['menu-item'], {[styles['can-choose']]: canChoose})} onClick={onMenuClick}>
			<div className={cs(styles['menu-link'], {[styles['disable']]: canChoose == false})}>
				{props.text} {iconItem}
			</div>
		</li>
	);
}

export default SimpleMenuItem;