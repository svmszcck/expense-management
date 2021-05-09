import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchExpenses } from 'store/actions/expense';
import { EXPENSE_LIMIT } from 'constants/general';
import { Store } from 'types';
import HomeView from './view';

const Home = () => {
    const [offset, setOffset] = useState<number>(0);
    const dispatch = useDispatch();
    const expense = useSelector((state: Store) => state.expense);

    useEffect(() => {
        dispatch(fetchExpenses({ limit: EXPENSE_LIMIT, offset }));
    }, []);

    const loadMore = () => {
        const newOffset = (offset + 1) * EXPENSE_LIMIT;
        dispatch(fetchExpenses({ limit: EXPENSE_LIMIT, offset: newOffset }));
        setOffset(offset + 1);
    }

    return (
        <HomeView list={expense.list} loadMore={loadMore} />
    );
};

export default Home;
