import React from 'react'
import { Col } from 'react-bootstrap'
import { Page, Title, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.darkGray};
  color: ${theme.offWhite};
`

const Mission = (props) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>Mission Section</Title>
      <Content>
        This is the goals/mission section.
      </Content>
    </Col>
  </WithThemePage>
)

export default Mission;
