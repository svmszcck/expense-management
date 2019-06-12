import styled from 'styled-components'

import Flex from '../Flex/Container'

export const StyledContainer = styled(Flex)`
  width: 100%;
  padding: 1em 0;
  background-color: #444444;

  position: relative;

  color: #DEDEDE;
  font-size: 10px;
`
export const StyledOverflowedContainer = styled(Flex)`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
      height: 6px;
  }
  

  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      border-radius: 10px;
  }
  

  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(255,255,255, 0.25); 
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background:rgba(255,255,255, 0.15); 
  }
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