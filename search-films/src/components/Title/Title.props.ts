import { HtmlHTMLAttributes } from 'react';

export interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    /**
     * Text to display in the title
     */
    text: string;
}