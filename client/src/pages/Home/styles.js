import styled from 'styled-components';

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .expense {
        display: flex;
        flex-direction: row;

        &__user {
            width: 10rem;
            margin-right: 2rem;
            border-right: 1px solid #E9E9E9;
        }

        &__user-detail {
            font-size: 13px;
            opacity: 0.6;
        }
        
        &__detail {
            opacity: 0.6;
        }
    }
  
    .footer {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 2rem;
    }
`;

export default Styled;