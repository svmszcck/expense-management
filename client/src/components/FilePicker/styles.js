import styled from 'styled-components';

import { GRAY_DARK } from 'constants/colors';

const Styled = styled.div`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid ${GRAY_DARK};
    border-style: dashed;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 2rem;
    cursor: pointer;
`;

export default Styled;