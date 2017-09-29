import React from 'react'
import { Col } from 'react-bootstrap'
import { Page, Title, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.white};
  color: ${theme.darkGray};

  h1 {
    color: ${theme.purple};
  }
`

const Mission = (props) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>The Mission</Title>
      <Content>
        <div>IMAGE GOES HERE</div>
        <p>
          We believe that books have the ability to transform people's lives, and it is for that reason that we aim to publish books, across all genres, whose contents focus on improving animal rights, human rights, and/or environmental concerns, all while maintaining a strict level of sustainability in our production process.
        </p>
        <div>IMAGE GOES HERE</div>
        <blockquote>
          “The goal of EcoLit Press is to publish books that encourage readers to appreciate and nurture our planet and all of its living creatures.”
        </blockquote>
        <div>BUTTON GOES HERE</div>
      </Content>
    </Col>
  </WithThemePage>
)

export default Mission;
