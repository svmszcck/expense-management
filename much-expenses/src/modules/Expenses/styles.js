import styled from 'styled-components'

import FlexContainer from '../../components/Flex/Container'

export const StyledList = styled.div`
   margin-left: 2em;
   margin-top: 2em;
`

export const StyledItem = styled(FlexContainer)`
  padding: 1em;

  &:hover{
    background-color: #EEEEEE
  }
`