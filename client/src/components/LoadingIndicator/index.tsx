import React from 'react';
import { List } from 'react-content-loader';

import { WHITE } from 'constants/colors';

const LoadingIndicator = () => {
    return (
        <List backgroundColor={WHITE} foregroundColor={WHITE} />
    );
};

export default LoadingIndicator;