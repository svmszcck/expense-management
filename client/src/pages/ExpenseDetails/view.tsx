import React from 'react';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Card, LoadingIndicator, Section } from 'components';
import { Expense } from 'types';
import { GRAY_DARK } from 'constants/colors';
import Styled from './styles';

const ExpenseDetailsView = ({ data }: ExpenseDetailsViewProps) => {
    const { merchant, category, amount, user, comment, date } = data;

    return (
        <Styled>
            {isEmpty(data) ?
                <LoadingIndicator />
                :
                (
                    <Section title='Expense Details'>
                        <Card>
                            <div className='expense'>
                                <FontAwesomeIcon className='expense__edit' icon={faEdit} />
                                <div className='expense__user'>
                                    <FontAwesomeIcon icon={faUserCircle} size='3x' color={GRAY_DARK} />
                                    <div className='expense__user-info'>
                                        <p className='expense__user-detail'>{user.first} {user.last}</p>
                                        <p className='expense__user-detail'>{user.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='expense__detail'><b>Merchant:</b> {merchant}</p>
                                    <p className='expense__detail'><b>Category:</b> {category || '-'}</p>
                                    <p className='expense__detail'><b>Amount:</b> {amount.value} {amount.currency}</p>
                                    <p className='expense__detail'><b>Date:</b> {new Date(date).toLocaleDateString()}</p>
                                    <p className='expense__detail'><b>Comment:</b> {comment || '-'}</p>
                                </div>
                            </div>
                        </Card>
                    </Section>)
            }
        </Styled>
    );
};

type ExpenseDetailsViewProps = {
    data: Expense
}

export default ExpenseDetailsView;