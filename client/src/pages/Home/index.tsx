import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchExpenses } from 'store/actions/expense';
import { Store } from 'types';
import HomeView from './view';

const Home = () => {
    const dispatch = useDispatch();
    const expense = useSelector((state: Store) => state.expense);

    useEffect(() => {
        dispatch(fetchExpenses({ limit: 10, offset: 1 }));
    }, []);

    return (
        <HomeView data={expense.data} />
    );
};

export default Home;