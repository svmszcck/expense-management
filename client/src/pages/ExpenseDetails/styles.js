import styled from 'styled-components';

import { DANGER, SUCCESS } from 'constants/colors';

const Styled = styled.div`
    display: flex;
    flex-direction: row;

    .expense {
        position: relative;

        &__user {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #E9E9E9;
        }

        &__user-info {
            margin-left: 0.8rem;
        }

        &__user-detail {
            font-size: 13px;
            opacity: 0.6;
        }
        
        &__detail {
            opacity: 0.6;
        }
    }

    .expense-edit {
        display: flex;
        flex-direction: column;
        position: relative;

        &__title {
            width: fit-content;
            font-weight: bold;
            opacity: 0.6;
        }

        &__comment {
            width: 100%;
            min-width: 100%;
            max-width: 100%;
            min-height: 5rem;
            box-sizing: border-box;
            padding: 0.5rem;
            margin-bottom: 1rem;
        }
        
        &__error {
            color: ${DANGER};
            margin-top: 0;
        }

        &__success{
            color: ${SUCCESS};
            margin-top: 0;
        }
    }

    .expense-toggle {
            position: absolute;
            font-size: 25px;
            top: 0;
            right: 0;
            cursor: pointer;
            opacity: 0.8;

            &:hover {
                opacity: 0.7;
            }
        }
`;

export default Styled;