import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col } from 'react-bootstrap'
import { Page, Title, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.white};
  color: ${theme.darkGray};

  h1 {
    color: ${theme.purple};
  }
`

const Story = ({ data: { heading, content } }) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>{heading}</Title>
      <Content>
        <ReactMarkdown source={content} />
      </Content>
    </Col>
  </WithThemePage>
)

export default Story;
