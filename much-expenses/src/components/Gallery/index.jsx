import React from 'react'

import {  branch, renderComponent, compose } from 'recompose'


import {
  StyledContainer, 
  StyledOverflowedContainer,
  StyledItemWrapper, 
  StyledCloseButton,
  StyledClickableText
} from './styles'


const Gallery = ({
  items,
  toggle,
  renderItem
}) =>
  <StyledContainer>
    <StyledOverflowedContainer>
      {
        items.map((item, ind) =>
          <StyledItemWrapper key={ind}>
            {renderItem(item, ind)}
          </StyledItemWrapper>
        )
      }
    </StyledOverflowedContainer>
    <StyledCloseButton onClick={evt => toggle('CLOSE')} >Close</StyledCloseButton>
  </StyledContainer>


const noItemsMessage = branch(
  ({ items = [] }) => items.length === 0,
  renderComponent(({ emptyMessage }) => <StyledContainer>{emptyMessage}</StyledContainer>)
)

const collapsed = branch(
  ({ collapsed }) => collapsed,
  renderComponent(({ toggle, openMessage }) => 
    <StyledContainer>
      <StyledClickableText onClick={evt => toggle('OPEN')}>{openMessage}</StyledClickableText>
    </StyledContainer>
  )
)


export default compose(
  noItemsMessage,
  collapsed
) (Gallery)