import cn from 'classnames';
import { default as CssUtils } from '../shared/CssUtils.js';
import styles from './index.module.css';
import type { ParagraphProps } from './Paragraph.props.js';

function Paragraph({text, className, fontSizeInPx}: ParagraphProps) {
	const style = {
		fontSize: CssUtils.addPxToCssProperty(fontSizeInPx)
	};
	return (
		<p className={cn(className, styles.paragraph)} style={style}>{text}</p>
	);
}

export default Paragraph;