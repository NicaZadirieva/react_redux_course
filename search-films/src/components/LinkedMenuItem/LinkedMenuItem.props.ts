import { HtmlHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { ICON_TYPE } from '../shared/MenuIconBuider';

export interface LinkedMenuItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
    children?: ReactNode;

    /**
     * menu item text
     */
    text: string;

    /**
     * (optional)
     * menu item link
     */
    linkUrl?: string;

    /**
     * (optional) icon image
     */
    icon?: IconImage;

    /**
     * (byDefault=true) enable menu item to be clicked
     */
    canChoose?: boolean;

    /**
     * (optional, enabled if canChoose) function to handle clicks on menu button
     */
    handleClicks?: MouseEventHandler<HTMLLIElement>;
};

export interface IconImage {

    /**
     * (svg/iconText) type of icon to display
     **/
    type: ICON_TYPE;

    /**
     * text to display if type == "iconText" or url (please "*.svg") if type == "svg"
     */
    dataSource: string | number;
}