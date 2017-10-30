import styled from 'styled-components'
import { Title, theme} from '../../../styled/theme'

export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background:
  url(https://images.contentful.com/dfr34shq95oy/3e4bgpqsPumuswKM66Wa2k/d3124f202ea009b5deb0c0daaf5b56d0/Jonah_with_blue.jpg);
  background-repeat: no-repeat;
  background-position: center top;

  @media screen and (max-width: 767px) {
    background: top;
    background-color: ${theme.blue};
  }
`

export const Container = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100vh;
  position: relative;
  width: 100%;
  text-align: left;
`

export const ContentContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  color: #F3FBF6;
`

export const StyledTitle = Title.extend`
  color: ${theme.purple};
  padding-bottom: 0px;
`
