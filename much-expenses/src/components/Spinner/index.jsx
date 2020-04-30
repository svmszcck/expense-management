import React from 'react'

import styled, { keyframes } from 'styled-components'



const StyledSpinner = styled.div`

  height: ${({ height = 25 }) => height}px;
  text-align: center;
  font-size: 10px;
`



const getBlips = (n, duration, steps) => {

  const interval = duration / n
  const maxes = steps.max.map(val => `${val}%`).join(',')
  const mins = steps.min.map(val => `${val}%`).join(',')

  const animation = keyframes`
    ${mins} { transform: scaleY(0.4); } 
    ${maxes} { transform: scaleY(1); }
  `

  const blip = styled.div`
    background-color: #777;
    height: 100%;
    width: 10px;
    margin-right: 1px;
    display: inline-block;
    animation: ${animation} ${duration}s infinite ease-in-out;
  `

  return Array(n)
    .fill(blip)
    .map((el, ind) => styled(el)`
      animation-delay: -${duration - interval * ind}s;
    `)
    .map((C, i) => <C key={i}/>)
}



export const Spinner = ({
  amount,
  duration,
  keyframes,
  height
}) => 
  <StyledSpinner height={height}>
    { getBlips(amount, duration, keyframes) }
  </StyledSpinner>