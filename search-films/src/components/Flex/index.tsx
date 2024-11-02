import cs from 'classnames';
import { default as CssUtils } from '../shared/CssUtils';
import { FlexProps } from './Flex.props';
import styles from './index.module.css';
/**
 * util Flex component 
 * @param {string} position - (byDefault=vertical) vertical/horizontal flex container
 * @param {number} paddingTop - (byDefault=0) vertical/horizontal flex container
 * @returns {FlexProps} Flex 
 * 
*/
function Flex(props: FlexProps) {

	const {position=/*byDefault=*/ 'vertical'} = props;

	const paddingTop = props.paddingTop ? CssUtils.addPxToCssProperty(props.paddingTop) : /*byDefault=*/ 0;

	return (
		<div style={{paddingTop}} className={cs({
			[styles['flex-container-vaertical']]: position == 'vertical',
			[styles['flex-container-horizontal']]: position == 'horizontal'
		})}>
			{props.children}
		</div>);
	
}

export default Flex;