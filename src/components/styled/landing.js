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

  ${'' /* @media screen and (min-width: 769px) {
    background:
    url(https://images.contentful.com/8tgzv1ffznc9/5bMD4QQb1CCossOiYWESs/7e55d4683b27c75d606b09c4f7d3f7b0/bg_landscape_1280_wide_web.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-color: #53C3C3;
  } */}
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

  ${'' /* @media screen and (min-aspect-ratio: 3/2), screen and (max-width: 440px) {
    top: 50%;
  } */}
`
