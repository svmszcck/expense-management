import styled from 'styled-components';

import { GRAY, DANGER, SUCCESS, GRAY_DARK } from 'constants/colors';

const Styled = styled.div`
    display: flex;
    flex-direction: row;

    .back {
        color: ${GRAY};
        opacity: 0.8;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .expense {
        position: relative;

        &__user {
            display: flex;
            align-items: center;
            border-bottom: 1px solid ${GRAY};
            padding-bottom: 0.8rem;
        }

        &__user-info {
            margin-left: 0.8rem;
            max-width: 60%;
            word-wrap: break-word;
        }

        &__user-detail {
            font-size: 13px;
            opacity: 0.6;
            margin-top: 0.2rem;
            margin-bottom: 0;
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

        &__file {
            margin-bottom: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &__comment {
            width: 100%;
            min-width: 100%;
            max-width: 100%;
            min-height: 8rem;
            border: 2px solid ${GRAY_DARK};
            border-radius: 5px;
            box-sizing: border-box;
            padding: 0.5rem;
            margin-bottom: 1rem;
        }
        
        &__error {
            color: ${DANGER};
            margin-bottom: 0;
        }

        &__success{
            color: ${SUCCESS};
            margin-bottom: 0;
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