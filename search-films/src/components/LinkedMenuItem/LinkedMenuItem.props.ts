import { HtmlHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export interface LinkedMenuItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
    children: ReactNode;
    text: string;
    linkUrl: string;
    icon: IconImage;
    canChoose: boolean;
    handleClicks: MouseEventHandler<HTMLLIElement>;
};

export interface IconImage {
    type: 'iconText' | 'svg';
    dataSource: string;
}