import { FormHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends FormHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    inputActionName: string;
    iconClassName?: string;
    position?: ('vertical' | 'horizontal');
    hasIcon?: boolean;
    onSend: (textToAction: string) => void;
    placeholder: string;
}

export interface InputFormField extends HTMLFormControlsCollection {
    textToAction: HTMLFormElement;
}