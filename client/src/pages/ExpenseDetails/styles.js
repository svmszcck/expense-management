import styled from 'styled-components';

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

        &__edit {
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
`;

export default Styled;