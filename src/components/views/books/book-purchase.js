import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Image } from 'react-bootstrap'
import {
  Title,
  Content,
  LinkButton,
  theme
} from '../../styled/theme'

import SectionContainer from '../../section-container'

const BookFeature = ({
  data: {
    heading,
    content,
    bookImage: { fields: { file: { url: bookImageUrl } } }
  }
}) => (
  <SectionContainer bg={theme.white}>
    <Col xs={12} md={6} style={{ marginLeft: 0, paddingLeft: 0 }}>
      <Image responsive src={`https:${bookImageUrl}`} />
    </Col>
    <Col xs={12} md={6}>
      <Title noBottom>{heading}</Title>
      <Content>
        <ReactMarkdown source={content} />
      </Content>
    </Col>

    <Col xs={12}>
      <Col xs={12} md={4}>
        <div
          style={{
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: '40px',
           }}>
            <LinkButton to='https://www.amazon.com/Emma-Alexandra-Lindsay-Fields/dp/0999207504/' target='_blank'>Amazon</LinkButton>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div
          style={{
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: '40px'
           }}>
            <LinkButton to='https://store.casanctuary.org/collections/books/products/book-emma' target='_blank'>Catskill Animal Sanctuary</LinkButton>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div
          style={{
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: '40px'
           }}>
            <LinkButton to='https://www.barnesandnoble.com/w/emma-alexandra-fields/1126858286' target='_blank'>Barnes & Noble</LinkButton>
        </div>
      </Col>
    </Col>
  </SectionContainer>
)

export default BookFeature;
