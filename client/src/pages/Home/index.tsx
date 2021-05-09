import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchExpenses } from 'store/actions/expense';
import HomeView from './view';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExpenses({ limit: 10, offset: 1 }));
    }, []);

    return (
        <HomeView />
    );
};

export default Home;