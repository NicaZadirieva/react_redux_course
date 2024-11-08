import { HtmlHTMLAttributes } from 'react';

export interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    /**
     * Text to display in the title
     */
    text: string;
}