import styled from 'styled-components';

import Screens from 'utils/screens';

const Styled = styled.div`
    padding: 2rem;
    @media ${Screens.retina} {
       padding: 3rem 8rem 3rem 8rem;
    }

    a {
        color: initial;
        text-decoration: none;
    }
`;

export default Styled;