import styled from 'styled-components'

import Flex from '../Flex/Container'

export const StyledContainer = styled(Flex)`
  padding: 1em 0;
  background-color: #444444;

  position: relative;

  color: #DEDEDE;
  font-size: 10px;
`


export const StyledItemWrapper = styled.div`
  margin: 1em 1em 1em 0;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
`

export const StyledClickableText = styled.span`
  cursor: pointer;
`