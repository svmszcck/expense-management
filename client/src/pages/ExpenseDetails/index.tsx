import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { fetchExpense, updateExpense, uploadReceipt, updateExpenseStatus } from 'store/actions/expense';
import { VIEW, ERROR } from 'constants/ui';
import { Store } from 'types';
import ExpenseDetailsView from './view';

const ExpenseDetails = () => {
    const [comment, setComment] = useState<string>('');
    const [file, setFile] = useState<File>();
    const [mode, setMode] = useState<string>(VIEW);

    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const expense = useSelector((state: Store) => state.expense);

    useEffect(() => {
        if (mode === VIEW) dispatch(fetchExpense(id));
        else {
            dispatch(updateExpenseStatus(null));
        }
    }, [mode]);

    const updateMode = (mode: string) => {
        setMode(mode);
    }

    const selectFile = (file: File) => {
        setFile(file);
    }

    const submit = async () => {
        if (isEmpty(comment) && !file) {
            dispatch(updateExpenseStatus(ERROR));
            return;
        }

        if (!isEmpty(comment)) dispatch(updateExpense(id, comment));
        if (file) dispatch(uploadReceipt(id, file));
    }

    return (
        <ExpenseDetailsView data={expense.data} updateMode={updateMode} mode={mode} selectFile={selectFile}
            setComment={setComment} file={file} submit={submit} updateStatus={expense.updateStatus} />
    );
};

export default ExpenseDetails;