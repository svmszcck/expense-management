import React, { ReactNode } from 'react';

import { PRIMARY } from 'constants/buttonTypes';
import Styled from './styles';

const Button = ({ type = PRIMARY, action, children }: ButtonProps) => {
    return (
        <Styled onClick={action} type={type}>
            {children}
        </Styled>
    );
};

type ButtonProps = {
    children: ReactNode;
    type?: string;
    action?: () => any
};

export default Button;