import { default as CssUtils } from '../shared/CssUtils.js';
import './styles/index.css';

function Paragraph({text, fontSizeInPx}) {
	// здесь стили вот так задаются, чтобы на маленьких экранах было норм
	let style = {
		fontSize: CssUtils.addPxToCssProperty(fontSizeInPx)
	};
	return (
		<p className="paragraph" style={style}>{text}</p>
	);
}

export default Paragraph;