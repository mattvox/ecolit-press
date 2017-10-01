import React from 'react';
import { Grid, Col } from 'react-bootstrap'
import { Page, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.darkGray};
  color: ${theme.offWhite};
  text-align: center;
`

const Footer = () => (
  <Grid fluid>
    <WithThemePage>
      <Col xs={10} xsOffset={1}>
        <Content>
          <p>© 2017 Ecolit Press. All rights reserved.</p>
        </Content>
      </Col>
    </WithThemePage>
  </Grid>
)

export default Footer;
