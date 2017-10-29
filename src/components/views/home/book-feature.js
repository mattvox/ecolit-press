import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Image } from 'react-bootstrap'
import {
  Title,
  Subtitle,
  Content,
  LinkButton,
  theme
} from '../../styled/theme'

import SectionContainer from '../../section-container'

const BookFeature = ({
  data: {
    bookTitle,
    author,
    content,
    bookImage: { fields: { file: { url: bookImageUrl } } }
  }
}) => (
    <SectionContainer
      bg={
        `linear-gradient(${theme.blue} 180px, ${theme.white} 180px)`
      }
    >
      <Col xs={12} md={6}>
        <Title color={theme.white} noBottom>{bookTitle}</Title>
        <Subtitle>{`by ${author}`}</Subtitle>
        <Content>
          <ReactMarkdown source={content} />
        </Content>
      </Col>
      <Col xs={12} md={6}>
        <Image responsive src={`https:${bookImageUrl}`} />
      </Col>
      <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4}>
        <div
          style={{
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: '40px'
           }}>
            <LinkButton to='/books/emma'>Learn More About Emma</LinkButton>
        </div>
      </Col>
    </SectionContainer>
)

export default BookFeature
