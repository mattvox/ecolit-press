import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { theme } from './styled/theme'

const ArrowContainer = styled.div`
  bottom: 60px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
  color: ${theme.white};
  font-size: 4.5em;
  background: none;
  border: none;

  ${'' /* @media screen and (max-width: 440px) {
    bottom: 50%;
  }

  @media screen and (max-width: 325px) {
    visibility: hidden;
  } */}
`

const StyledAngleDown = styled(FontAwesome)`

`

const DownArrow = (props) => (
  <ArrowContainer>
    <StyledAngleDown name='angle-down' />
  </ArrowContainer>
)

export default DownArrow;
