import styled from 'styled-components';

import { WHITE } from 'constants/colors';
import Screens from 'utils/screens';

const Styled = styled.div`
    width: 100%;
    box-sizing: border-box;
    min-height: 5rem;
    background-color: ${WHITE};
    padding: 0.8rem 1rem 0.8rem 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    cursor: ${({ clickable }) => clickable ? 'pointer' : 'initial'};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: .3s;

    ${({ animated }) => animated && `
        @media ${Screens.desktop}, ${Screens.retina} {
            &:hover {
                box-shadow: 1px 1px 3px rgba(0,0,0,0.25), 1px 2px 3px rgba(0,0,0,0.22);
                width: calc(100% + 1.6rem);
                margin-left: -0.8rem;
                margin-right: -0.8rem;

            }
        }`}
`;

export default Styled;