class MenuIconBuilder {
	static buildExitIcon() {
		return {
			type: MenuIconBuilder.constants.$SVG_TYPE,
			dataSource: '/exit-icon.svg'
		};
	}
	static buildAvatarIcon() {
		return {
			type: MenuIconBuilder.constants.$SVG_TYPE,
			dataSource: '/avatar-icon.svg'
		};
	}
	static buildCounterIcon(counter) {
		return {
			type: MenuIconBuilder.constants.$ICON_TEXT_TYPE,
			dataSource: counter
		};
	}
	static addClassToDefaultClassName(defaultClassName, addedClass) {
		return defaultClassName + (addedClass ? ' ' + addedClass : '');
	}
}
MenuIconBuilder.constants = {
	$SVG_TYPE: 'svg',
	$ICON_TEXT_TYPE: 'iconText'
};

export default MenuIconBuilder;