import styled from 'styled-components';

import { WHITE } from 'constants/colors'

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    
    .title {
        font-weight: bold;
        font-size: 25px;
        color: ${WHITE};
        opacity: 0.9;
    }
`;

export default Styled;