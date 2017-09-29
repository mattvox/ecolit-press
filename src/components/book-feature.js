import React from 'react'
import { Col } from 'react-bootstrap'
import { Page, Title, Subtitle, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.blue};
  color: ${theme.darkGray};

  h1 {
    color: ${theme.purple};
  }
`

const Mission = (props) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>Emma</Title>
      <Subtitle>By Alexandra Fields</Subtitle>
      <Content>
        <p>
          Emma, a baby calf, longs to know what life is like outside of the industrial farm building where she lives. One day, she finally gets the opportunity to find out! Join Emma on her wild adventure as she searches for fun, friendship, and, above all, freedom.
        </p>
        <div>IMAGE GOES HERE</div>
        <div>BUTTON GOES HERE</div>
      </Content>
    </Col>
  </WithThemePage>
)

export default Mission;
