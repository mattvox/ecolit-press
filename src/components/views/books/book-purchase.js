import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Image } from 'react-bootstrap'
import styled from 'styled-components'
import {
  Title,
  Content,
  LinkButton,
  SectionWrapper,
  theme,
} from '../../styled/theme'

import SectionContainer from '../../section-container'

const StyledSection = styled(SectionContainer)`
  background:
  url(https://images.contentful.com/8tgzv1ffznc9/4XoG6GvOMEKIwG6IaWq8Wy/38ace0792e1356f0f6c05c92788f1e75/bg_landscape_768_web.png);
  background-repeat: no-repeat;
  background-position: center bottom;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-color: #53C3C3;
  z-index: 999;
`

const BookFeature = ({
  data: {
    heading,
    content,
    bookImage: { fields: { file: { url: bookImageUrl } } },
    bottomImage: { fields: { file: { url: bottomImageUrl } } },
    farmImage1: { fields: { file: { url: farm1ImageUrl } } },
    farmImage2: { fields: { file: { url: farm2ImageUrl } } },
  }
}) => (
  <div>
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
  {/* <SectionWrapper>
    <Col
      xs={12}
      md={10}
      mdOffset={1}
      style={{
        padding: 0,
      }}
    >
      <Image responsive src={`https:${bottomImageUrl}`} />
     </Col>
     <Col
       xs={12}
       md={10}
       mdOffset={1}
       style={{
         padding: 0,
       }}
     >
     <Col xs={6} style={{ background: '#efefef'}}>
       <Image responsive src={`https:${farm1ImageUrl}`} />
      </Col>
      <Col xs={6} style={{ background: '#efefef'}}>
        <Image responsive src={`https:${farm2ImageUrl}`} />
       </Col>
     </Col>
  </SectionWrapper> */}
 </div>
)

export default BookFeature;
