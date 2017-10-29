import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Grid, Col } from 'react-bootstrap'
import { Page, Content, theme } from './styled/theme'

const Icon = styled.a`
  font-size: 25px;
  color: #E6ECEE;
  text-align: center;
  vertical-align: middle;

  &:link {
    color: ${theme.lightGray};
  }
  &:visited {
    color: ${theme.lightGray};
  }
  &:hover {
    color: ${theme.mediumGray};
  }
  &:active {
    color: ${theme.lightGray};
  }
`

const IconContainer = styled.div`
  display: inline-block;
  padding: 10px;
`

const WithThemePage = Page.extend`
  background-color: ${theme.darkGray};
  color: ${theme.offWhite};
  text-align: center;
`

const Footer = () => (
  <Grid fluid>
    <WithThemePage>
      <Col xs={10} xsOffset={1} style={{ textAlign: 'center' }}>
        <IconContainer>
          <Icon href="https://www.instagram.com/ecolitpress/" target="_blank">
            <span className="fa-stack fa-md">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-instagram fa-stack-1x"></i>
            </span>
          </Icon>
        </IconContainer>
        <IconContainer>
          <Icon href="mailto:afields@ecolitpress.com">
            <span className="fa-stack fa-md">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-envelope-o fa-stack-1x"></i>
            </span>
          </Icon>
        </IconContainer>
      </Col>
      <Col xs={10} xsOffset={1}>
        <Content>
          <p>© 2017 Ecolit Press. All rights reserved.</p>
        </Content>
      </Col>
      {/* Used to trigger static build with react-snapshot, testing */}
      <Link to={'/books/emma'}></Link>
      <Link to={'/contact'}></Link>
    </WithThemePage>
  </Grid>
)

export default Footer
