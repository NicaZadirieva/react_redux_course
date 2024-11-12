import { HtmlHTMLAttributes } from 'react';

export interface ParagraphProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    /**
     * Text to display in the paragraph
     */
    text: string;

    /**
     * font size for the paragraph (value without px)
     */
    fontSizeInPx: number;
}