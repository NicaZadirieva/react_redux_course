import { default as CssUtils } from '../shared/CssUtils';
import styles from './styles/index.module.css';
/**
 * util Flex component 
 * @param {string} position - (byDefault=vertical) vertical/horizontal flex container
 * @param {number} paddingTop - (byDefault=0) vertical/horizontal flex container
 * @returns {component} Flex 
 * 
*/
function Flex(props) {

	const {position=/*byDefault=*/ 'vertical'} = props;

	const paddingTop = props.paddingTop ? CssUtils.addPxToCssProperty(props.paddingTop) : /*byDefault=*/ 0;

	const flexContainer = position == 'vertical' ?
		<div style={{paddingTop}} className={styles['flex-container-vertical']}>
			{props.children}
		</div> :
		<div style={{paddingTop}} className={styles['flex-container-horizontal']}>
			{props.children}
		</div>;

	return flexContainer;
	
}

export default Flex;