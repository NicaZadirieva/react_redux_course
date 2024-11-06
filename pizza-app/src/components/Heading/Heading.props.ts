import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}