import React from 'react'

import {  branch, renderComponent, compose } from 'recompose'


import {
  StyledContainer, 
  StyledItemWrapper, 
  StyledCloseButton,
  StyledClickableText
} from './styles'


const Gallery = ({
  items,
  toggle,
  children
}) =>
 <StyledContainer>
    {
      items.map((item, ind) => 
        <StyledItemWrapper key={ind}>
          { children(item, ind) }
        </StyledItemWrapper>
      )
    }
    <StyledCloseButton onClick={evt => toggle('CLOSE')} >Close</StyledCloseButton>
  </StyledContainer>


const noItemsMessage = branch(
  ({ items = [] }) => items.length === 0,
  renderComponent(() => <StyledContainer> No items to show</StyledContainer>)
)

const collapsed = branch(
  ({ collapsed }) => collapsed,
  renderComponent(({ toggle, message }) => 
    <StyledContainer>
      <StyledClickableText onClick={evt => toggle('OPEN')}>{message}</StyledClickableText>
    </StyledContainer>
  )
)


export default compose(
  noItemsMessage,
  collapsed
) (Gallery)