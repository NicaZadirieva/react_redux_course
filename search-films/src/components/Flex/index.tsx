import cs from 'classnames';
import { default as CssUtils } from '../shared/CssUtils';
import { FlexProps } from './Flex.props';
import styles from './index.module.css';

function Flex({className, ...props}: FlexProps) {

	const {position=/*byDefault=*/ 'vertical'} = props;

	const paddingTop = props.paddingTop ? CssUtils.addPxToCssProperty(props.paddingTop) : /*byDefault=*/ 0;
	const gap = props.gap ? CssUtils.addPxToCssProperty(props.gap) : /*byDefault=*/ undefined;

	if(className !== undefined) {
		return (
			<div style={{paddingTop, gap: gap}} className={cs(className, {
				[styles['flex-container-vertical']]: position == 'vertical',
				[styles['flex-container-horizontal']]: position == 'horizontal'})}>
				{props.children}
			</div>);
	} else {
		return (
			<div style={{paddingTop, gap: gap}} className={cs({
				[styles['flex-container-vertical']]: position == 'vertical',
				[styles['flex-container-horizontal']]: position == 'horizontal'})}>
				{props.children}
			</div>);
	}
}

export default Flex;