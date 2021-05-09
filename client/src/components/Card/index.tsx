import React, { ReactNode } from 'react';

import Styled from './styles';

const Card = ({ children, clickable = false, animated = false }: CardProps) => {
    return (
        <Styled clickable={clickable} animated={animated}>
            {children}
        </Styled>
    );
};

type CardProps = {
    children: ReactNode;
    clickable?: boolean;
    animated?: boolean;
}

export default Card;