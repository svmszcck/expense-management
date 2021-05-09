import styled from 'styled-components';

import Screens from 'utils/screens';

const Styled = styled.div`
    padding: 2rem;
    @media ${Screens.desktop, Screens.retina} {
       padding: 2rem 8rem 2rem 8rem;
    }

    a {
        color: initial;
        text-decoration: none;
    }

    input, textarea {
        &:focus {
            outline-width: 0;
        }
    }
`;

export default Styled;