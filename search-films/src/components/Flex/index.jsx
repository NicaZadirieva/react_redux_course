import { default as CssUtils } from '../shared/CssUtils';
import './styles/index.css';
/**
 * util Flex component 
 * @param {string} position - (byDefault=vertical) vertical/horizontal flex container
 * @param {number} paddingTop - (byDefault=0) vertical/horizontal flex container
 * @returns {component} Flex 
 * 
*/
function Flex(props) {
	const {position='vertical', paddingTop=0, children} = props;
	// Add your CSS styles here, then pass them to the component as a prop.
	const styles = {paddingTop: CssUtils.addPxToCssProperty(paddingTop)};

	const flexContainer = position == 'vertical' ?
		<div style={styles} className='flex-container-vertical'>
			{children}
		</div> :
		<div style={styles} className='flex-container-horizontal'>
			{children}
		</div>;

	return flexContainer;
	
}

export default Flex;