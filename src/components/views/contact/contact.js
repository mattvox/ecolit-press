import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import { Title, Content, theme } from '../../styled/theme'


const WithThemePage = styled(Row)`
  background-color: ${theme.white};
  color: ${theme.darkGray};

  h1 {
    color: ${theme.purple};
  }
`

const Contact = ({ data: { heading, content } }) => (
  <WithThemePage style={{
    paddingTop: '60px',
    paddingBottom: '60px',
  }}>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>{heading}</Title>
      <Content>
        <ReactMarkdown source={content} />
      </Content>
    </Col>
  </WithThemePage>
)

export default Contact;
