import styled from 'styled-components'
import { theme } from './theme'

// styling for the landing component only
// app-wide, reusable styles are found in theme.js

export const Container = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100vh;
  position: relative;
  width: 100%;
  text-align: center;
  background-color: ${theme.green};
`

export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background:
  url(https://images.contentful.com/dfr34shq95oy/2mAv0fqWxCmgugym0Cu84a/62402c6803f7f6950a38963d0b2bdc3e/EcoLitMainPageBackground.jpg);
  background-repeat: no-repeat;
  background-position: center bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

// creates a small, styled div to eliminate
// random ugly horizontal lines between the landing section
// and the section immediately below it
export const ColorFix = styled.div`
  box-sizing: border-box;
  display: block;
  height: 6%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  text-align: center;
  z-index: 99;
  background-color: #242B3A;
`

export const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  color: #F3FBF6;
  transform: translateY(-50%);
`
