import { HtmlHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { IconImage } from '../shared/MenuIconBuilder';

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
     * (optional, enabled if canChoose) function to handle clicks on menu button
     */
    handleClicks?: MouseEventHandler<HTMLDivElement | HTMLLIElement>;
};

