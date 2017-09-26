import React from 'react';
import { Col } from 'react-bootstrap'
import { Page, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.darkGray};
  color: ${theme.offWhite};
  text-align: center;
`

const Footer = () => (
  <WithThemePage>
    <Col xs={10} xsOffset={1}>
      <Content>
        <p>Ecolit Press © 2017</p>
      </Content>
    </Col>
  </WithThemePage>
)

export default Footer;
