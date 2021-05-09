import React, { ReactNode } from 'react';

import Styled from './styles';

const Button = ({ type = 'primary', action, children }: ButtonProps) => {
    return (
        <Styled onClick={action} type={type}>
            {children}
        </Styled>
    );
};

type ButtonProps = {
    children: ReactNode;
    type?: string;
    action?: () => {}
};

export default Button;