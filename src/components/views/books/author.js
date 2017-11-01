import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Image } from 'react-bootstrap'
import {
  Title,
  Subtitle,
  Content,
  theme,
} from '../../styled/theme'

import SectionContainer from '../../section-container'

const Author = ({
  data: {
    heading,
    author,
    content,
    authorPhoto: { fields: { file: { url: authorPhotoUrl } } }
  }
}) => (
  <SectionContainer
    bg={`linear-gradient(${theme.green} 190px, ${theme.white} 190px)`}
  >
    <Col xs={12} md={6}>
      <Title noBottom color={theme.white}>{heading}</Title>
      <Subtitle>{author}</Subtitle>
      <Content>
        <ReactMarkdown source={content} />
      </Content>
    </Col>
    <Col xs={12} md={6} mdOffset={0}>
      <Image responsive src={`https:${authorPhotoUrl}`} />
    </Col>
  </SectionContainer>
)

export default Author;
