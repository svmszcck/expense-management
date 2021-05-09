import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchExpense } from 'store/actions/expense';
import { VIEW, EDIT } from 'constants/ui';
import { Store } from 'types';
import ExpenseDetailsView from './view';

const ExpenseDetails = () => {
    const [mode, setMode] = useState<string>(VIEW);
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const expense = useSelector((state: Store) => state.expense);

    useEffect(() => {
        dispatch(fetchExpense(id));
    }, []);

    const updateMode = (mode: string) => {
        setMode(mode);
    }

    return (
        <ExpenseDetailsView data={expense.data} />
    );
};

export default ExpenseDetails;