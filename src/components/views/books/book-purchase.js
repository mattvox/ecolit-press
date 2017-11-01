import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import {
  Title,
  Content,
  LinkButton,
  Container,
  theme,
} from '../../styled/theme'

import SectionContainer from '../../section-container'

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
  <Container>
    <Grid fluid>
      <Row>
        <Col
          xs={12}
          md={10}
          mdOffset={1}
          style={{ padding: 0 }}
        >
          <Image style={{ marginBottom: '20px' }} responsive src={`https:${bottomImageUrl}`} />
        </Col>
        <Col
          xs={12}
          md={10}
          mdOffset={1}
          style={{ padding: 0 }}
        >
          <Row style={{ padding: '40px' }}>
            <Col xs={10} xsOffset={1} sm={4} style={{ padding: '40px' }}>
              <Image responsive src={`https:${farm1ImageUrl}`} />
            </Col>
            <Col xs={10} xsOffset={1} sm={4} smOffset={2} style={{ padding: '40px' }}>
              <Image responsive src={`https:${farm2ImageUrl}`} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Container>
 </div>
)

export default BookFeature;
