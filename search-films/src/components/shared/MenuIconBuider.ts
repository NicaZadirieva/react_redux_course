import { IconImage } from '../LinkedMenuItem/LinkedMenuItem.props';

class MenuIconBuilder {
	static constants = {
		$SVG_TYPE: 'svg',
		$ICON_TEXT_TYPE: 'iconText'
	};

	static buildExitIcon(): IconImage {
		return {
			type: MenuIconBuilder.constants.$SVG_TYPE,
			dataSource: '/exit-icon.svg'
		};
	}
	static buildAvatarIcon(): IconImage {
		return {
			type: MenuIconBuilder.constants.$SVG_TYPE,
			dataSource: '/avatar-icon.svg'
		};
	}
	static buildCounterIcon(counter: number) : IconImage {
		return {
			type: MenuIconBuilder.constants.$ICON_TEXT_TYPE,
			dataSource: counter
		};
	}
}

export default MenuIconBuilder;