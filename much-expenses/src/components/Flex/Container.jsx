import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ along = 'center' }) => along};
  align-items: ${({ across = 'center' }) => across};
  flex-wrap: ${({ wrap = 'initial' }) => wrap};
`
