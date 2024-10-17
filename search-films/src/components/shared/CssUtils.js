class CssUtils {
	static addPxToCssProperty(property) {
		return property + 'px';
	}
	static addClassToDefaultClassName(defaultClassName, addedClass) {
		return defaultClassName + (addedClass ? ' ' + addedClass : '');
	}

}
export default CssUtils;