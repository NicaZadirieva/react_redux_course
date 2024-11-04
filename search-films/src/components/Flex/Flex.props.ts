import { ReactNode } from 'react';

export interface FlexProps extends DivProps {
    children: ReactNode;
    position?: 'vertical' | 'horizontal';
    paddingTop: number;

}