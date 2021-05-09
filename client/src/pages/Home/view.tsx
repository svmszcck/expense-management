import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { Button, Card, Section } from 'components';
import { OUTLINE } from 'constants/buttonTypes';
import { EXPENSE_DETAILS } from 'constants/routes';
import { Expense } from 'types';
import Styled from './styles';

const HomeView = ({ data }: HomeViewProps) => {
    return (
        <Styled>
            <Section title='Expense List'>
                {data.map(({ merchant, amount, category, user }: Expense, index: number) => (
                    <Link to={EXPENSE_DETAILS} key={index}>
                        <Card clickable animated>
                            <div className='expense'>
                                <div className='expense__user'>
                                    <FontAwesomeIcon icon={faUserCircle} size='3x' color='#838383' />
                                    <p className='expense__user-detail'>{user.first} {user.last}</p>
                                    <p className='expense__user-detail'>{user.email}</p>
                                </div>
                                <div>
                                    <p className='expense__detail'><b>Merchant:</b> {merchant}</p>
                                    <p className='expense__detail'><b>Category:</b> {category || '-'}</p>
                                    <p className='expense__detail'><b>Amount:</b> {amount.value} {amount.currency}</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
                {data.length !== 0 &&
                    <div className='footer'>
                        <Button type={OUTLINE}>Load More</Button>
                    </div>
                }
            </Section>
        </Styled>
    );
};

type HomeViewProps = {
    data: any
}

export default HomeView;