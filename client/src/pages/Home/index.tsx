import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchExpenses, setExpenseOffset } from 'store/actions/expense';
import { EXPENSE_LIMIT } from 'constants/general';
import { Store } from 'types';
import HomeView from './view';

const Home = () => {
    const dispatch = useDispatch();
    const expense = useSelector((state: Store) => state.expense);

    useEffect(() => {
        if (expense.list.length === 0) {
            dispatch(fetchExpenses({ limit: EXPENSE_LIMIT, offset: expense.offset }));
        }
    }, []);

    const loadMore = () => {
        const newOffset = (expense.offset + 1) * EXPENSE_LIMIT;
        dispatch(fetchExpenses({ limit: EXPENSE_LIMIT, offset: newOffset }));
        dispatch(setExpenseOffset(expense.offset + 1));
    }

    return (
        <HomeView list={expense.list} loadMore={loadMore} />
    );
};

export default Home;
