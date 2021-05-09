import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Section } from 'components';
import { PRIMARY } from 'constants/buttonTypes';
import { EXPENSE_DETAILS } from 'constants/routes';
import Styled from './styles';

const HomeView = ({ data }: HomeViewProps) => {
    return (
        <Styled>
            <Section title='Expenses'>
                {data.map((expense: any, index: number) => <Link to={EXPENSE_DETAILS}><Card key={index} /></Link>)}
                <div className='footer'>
                    <Button type={PRIMARY}>Load More</Button>
                </div>
            </Section>
        </Styled>
    );
};

type HomeViewProps = {
    data: any
}

export default HomeView;