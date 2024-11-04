import cs from 'classnames';
import { MouseEventHandler } from 'react';
import styles from './index.module.css';
import { IconImage, LinkedMenuItemProps } from './LinkedMenuItem.props';

function LinkedMenuItem(props: LinkedMenuItemProps) {

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
			<a href={props.linkUrl} className={cs(styles['menu-link'], {[styles['disable']]: canChoose == false})}>
				{props.text} {iconItem}
			</a>
		</li>
	);
}

export default LinkedMenuItem;