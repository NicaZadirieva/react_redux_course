import { ReactNode } from 'react';

export interface FlexProps extends DivProps {
    children: ReactNode;

    /**
     * (byDefault=vertical) vertical/horizontal flex container
     **/
    position?: 'vertical' | 'horizontal';
    
    /**
     * (byDefault=0) padding top for flex container
     **/
    paddingTop: number;

}