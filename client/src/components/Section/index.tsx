import React, { ReactNode } from 'react';

import Styled from './styles';

const Section = ({ title, children }: SectionProps) => {
    return (
        <Styled>
            <p className='title'>{title}</p>
            {children}
        </Styled>
    );
};

type SectionProps = {
    title: string;
    children: ReactNode
}

export default Section;