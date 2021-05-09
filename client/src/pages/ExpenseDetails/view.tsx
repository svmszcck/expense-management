import React from 'react';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Button, Card, FilePicker, LoadingIndicator, Section } from 'components';
import { Expense } from 'types';
import { GRAY_DARK } from 'constants/colors';
import { VIEW, EDIT, ERROR, SUCCESS } from 'constants/ui';
import { SECONDARY } from 'constants/buttonTypes';
import Styled from './styles';

const ExpenseDetailsView = ({ data, updateMode, mode, selectFile, setComment, submit, updateStatus }: ExpenseDetailsViewProps) => {
    const { merchant, category, amount, user, comment, date } = data;
    const isViewMode = mode === VIEW;
    const isError = updateStatus === ERROR;
    const isSuccess = updateStatus === SUCCESS;

    return (
        <Styled>
            {isEmpty(data) ?
                <LoadingIndicator />
                :
                < Section title={isViewMode ? 'Expense Details' : 'Edit Expense'}>
                    <Card>
                        {isViewMode ?
                            <div className='expense'>
                                <FontAwesomeIcon className='expense-toggle' icon={faEdit} onClick={() => updateMode(EDIT)} />
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
                                <FontAwesomeIcon className='expense-toggle' icon={faCheckCircle} onClick={() => updateMode(VIEW)} />
                                <p className='expense-edit__title'>Expense Comment</p>
                                <textarea className='expense-edit__comment' rows={8} placeholder='Write the expense comment here...'
                                    onChange={e => setComment(e.target.value)} />
                                <p className='expense-edit__title'>Add Receipt</p>
                                <FilePicker action={selectFile} />
                                {isError &&
                                    <p className='expense-edit__error'>
                                        You need to add a comment or a file to be able to update the expense!
                                    </p>
                                }
                                {!isError && isSuccess &&
                                    <p className='expense-edit__success'>
                                        Expense successfully updated!
                                    </p>
                                }
                                <Button type={SECONDARY} action={submit}>Update Expense</Button>
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
    file: File | undefined;
    selectFile: (file: File) => void;
    setComment: (comment: string) => void;
    submit: () => void;
    updateStatus: string;
}

export default ExpenseDetailsView;