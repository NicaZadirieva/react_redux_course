class CssUtils {
	static addClassToClassNameProperty(prevClass, addedClass) {
		return prevClass + (addedClass ? ' ' + addedClass : '');
	}
}

export default CssUtils;