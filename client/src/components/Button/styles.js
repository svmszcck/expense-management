import styled from 'styled-components';

import { PRIMARY, SECONDARY, OUTLINE } from 'constants/buttonTypes';
import { PRIMARY as PRIMARY_COLOR, SECONDARY as SECONDARY_COLOR, WHITE } from 'constants/colors';

const handleType = type => {
    switch (type) {
        case PRIMARY:
            return `
                background-color: ${PRIMARY_COLOR};
                color: ${WHITE};
            `;
        case SECONDARY:
            return `
                background-color: ${SECONDARY_COLOR};
                color: ${WHITE};
            `;
        case OUTLINE:
            return `
                background-color: transparent;
                color: ${WHITE};
                border: 1px solid ${WHITE};
            `;
        default:
            return `
                background-color: ${PRIMARY_COLOR};
                color: ${WHITE};
            `;
    }
};

const Styled = styled.div`
    width: fit-content;
    ${({ type }) => handleType(type)};
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
        opacity: 0.9;
    }
`;

export default Styled;