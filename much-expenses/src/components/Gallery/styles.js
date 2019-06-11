import styled from 'styled-components'

import Flex from '../Flex/Container'

export const StyledContainer = styled(Flex)`
`


export const StyledItemWrapper = styled.div`
  margin: 1em 1em 1em 0;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`