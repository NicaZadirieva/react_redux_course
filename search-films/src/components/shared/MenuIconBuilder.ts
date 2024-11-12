const $SVG_TYPE = 'svg';
const $ICON_TEXT_TYPE = 'iconText';

export interface IconImage {

    /**
     * (svg/iconText) type of icon to display
     **/
    type:  typeof $SVG_TYPE | typeof $ICON_TEXT_TYPE;

    /**
     * text to display if type == "iconText" or url (please "*.svg") if type == "svg"
     */
    dataSource: string | number;
}

class MenuIconBuilder {

	static buildExitIcon() : IconImage{
		return {
			type: $SVG_TYPE,
			dataSource: '/exit-icon.svg'
		};
	}
	static buildAvatarIcon() : IconImage {
		return {
			type: $SVG_TYPE,
			dataSource: '/avatar-icon.svg'
		};
	}
	static buildCounterIcon(counter: number) : IconImage {
		return {
			type: $ICON_TEXT_TYPE,
			dataSource: counter
		};
	}
}

export default MenuIconBuilder;