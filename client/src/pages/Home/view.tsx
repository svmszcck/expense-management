import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { Button, Card, LoadingIndicator, Section } from 'components';
import { OUTLINE } from 'constants/buttonTypes';
import { GRAY_DARK } from 'constants/colors';
import { EXPENSE_DETAILS } from 'constants/routes';
import { MobileTablet } from 'hooks/useResponsive';
import { Expense } from 'types';
import Styled from './styles';

const HomeView = ({ list, loadMore }: HomeViewProps) => {
    const isMobileTablet = MobileTablet();

    return (
        <Styled>
            {isEmpty(list) ?
                <LoadingIndicator />
                :
                < Section title='Expense List'>
                    {list.map(({ id, merchant, amount, category, user }: Expense, index: number) => (
                        <Link to={`${EXPENSE_DETAILS}/${id}`} key={index}>
                            <Card clickable animated>
                                <div className='expense'>
                                    {!isMobileTablet &&
                                        <div className='expense__user'>
                                            <FontAwesomeIcon icon={faUserCircle} size='3x' color={GRAY_DARK} />
                                            <p className='expense__user-detail'>{user.first} {user.last}</p>
                                            <p className='expense__user-detail'>{user.email}</p>
                                        </div>
                                    }
                                    <div>
                                        {isMobileTablet &&
                                            <p className='expense__detail'><b>User:</b> {user.first} {user.last}, {user.email}</p>
                                        }
                                        <p className='expense__detail'><b>Merchant:</b> {merchant}</p>
                                        <p className='expense__detail'><b>Category:</b> {category || '-'}</p>
                                        <p className='expense__detail'><b>Amount:</b> {amount.value} {amount.currency}</p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                    {list.length !== 0 &&
                        <div className='footer'>
                            <Button type={OUTLINE} action={loadMore}>Load More</Button>
                        </div>
                    }
                </Section>
            }
        </Styled >
    );
};

type HomeViewProps = {
    list: Array<Expense>
    loadMore: () => void
}

export default HomeView;