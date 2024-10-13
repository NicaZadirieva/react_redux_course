import { default as CssUtils } from '../shared/CssUtils';
import './styles/index.css';
/**
 * util Flex component 
 * @param {string} position - (beDefault=vertical) vertical/horizontal flex container
 * @param {number} paddingTop - (beDefault=0) vertical/horizontal flex container
 * @returns {component} Flex 
 * 
*/
function Flex({position='vertical', paddingTop=0, children}) {
	
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