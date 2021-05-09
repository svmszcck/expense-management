import React from 'react';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Button, Card, FilePicker, LoadingIndicator, Section } from 'components';
import { Expense } from 'types';
import { GRAY_DARK } from 'constants/colors';
import { VIEW, EDIT } from 'constants/ui';
import { SECONDARY } from 'constants/buttonTypes';
import Styled from './styles';

const ExpenseDetailsView = ({ data, updateMode, mode, selectFile }: ExpenseDetailsViewProps) => {
    const { merchant, category, amount, user, comment, date } = data;

    return (
        <Styled>
            {isEmpty(data) ?
                <LoadingIndicator />
                :
                < Section title={mode === VIEW ? 'Expense Details' : 'Edit Expense'}>
                    <Card>
                        {mode === VIEW ?
                            <div className='expense'>
                                <FontAwesomeIcon className='expense__edit' icon={faEdit} onClick={() => updateMode(EDIT)} />
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
                            :
                            <div className='expense-edit'>
                                <p className='expense-edit__title'>Expense Comment</p>
                                <textarea className='expense-edit__comment' rows={8} placeholder='Write the expense comment here...' />
                                <p className='expense-edit__title'>Add Receipt</p>
                                <FilePicker action={selectFile} />
                                <Button type={SECONDARY}>Update Expense</Button>
                            </div>
                        }
                    </Card>
                </Section>

            }
        </Styled >
    );
};

type ExpenseDetailsViewProps = {
    data: Expense;
    updateMode: (mode: string) => void;
    mode: string;
    selectFile: (file: File) => void
}

export default ExpenseDetailsView;