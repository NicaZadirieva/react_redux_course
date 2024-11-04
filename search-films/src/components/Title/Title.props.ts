import { HtmlHTMLAttributes } from 'react';

export interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    text: string;
}