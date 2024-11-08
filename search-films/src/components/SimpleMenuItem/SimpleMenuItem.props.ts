import { HtmlHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { IconImage } from '../shared/MenuIconBuilder';

export interface SimpleMenuItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
    children?: ReactNode;

    /**
     * menu item text
     */
    text: string;

    /**
     * (optional) icon image
     */
    icon?: IconImage;

    /**
     * (optional, byDefault=true) flag to handle clicks
     */
    canChoose?: boolean; 

    /**
     * (optional, enabled if canChoose) function to handle clicks on menu button
     */
    handleClicks?: MouseEventHandler<HTMLLIElement>;
};