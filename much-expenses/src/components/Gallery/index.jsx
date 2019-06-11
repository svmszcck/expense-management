import React from 'react'


import { StyledContainer, StyledItemWrapper } from './styles'


const Gallery = ({
  items,
  children
}) => <StyledContainer wrap="wrap">
    {
      items.map((item, ind) => 
        <StyledItemWrapper>
          { children(item, ind) }
        </StyledItemWrapper>
      )
    }
</StyledContainer>


export default Gallery