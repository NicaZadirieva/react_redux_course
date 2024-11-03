class MenuIconBuilder {
	static constants = {
		$SVG_TYPE: 'svg',
		$ICON_TEXT_TYPE: 'iconText'
	};

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
	static buildCounterIcon(counter: number) {
		return {
			type: MenuIconBuilder.constants.$ICON_TEXT_TYPE,
			dataSource: counter
		};
	}
}

export default MenuIconBuilder;