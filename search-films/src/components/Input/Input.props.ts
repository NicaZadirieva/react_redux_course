import { FormHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends FormHTMLAttributes<HTMLFormControlsCollection> {
    children: ReactNode;
    inputActionName: string;
    iconClassName: string;
    position: 'vertical' | 'horizontal';
    hasIcon: boolean;
    onSend: (textToAction: string) => void;

}

export interface InputFormField extends HTMLFormControlsCollection {
    textToAction: HTMLFormElement;
}