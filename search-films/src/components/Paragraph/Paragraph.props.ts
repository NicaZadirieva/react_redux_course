import { HtmlHTMLAttributes } from 'react';

export interface ParagraphProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    text: string;
    fontSizeInPx: number;
}