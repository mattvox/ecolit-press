import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Image } from 'react-bootstrap'
import {
  Page,
  Title,
  Content,
  LinkButton,
  theme
} from './styled/theme'


const WithThemePage = Page.extend`
  ${'' /* color: ${theme.darkGray};
  background: linear-gradient(${theme.blue} 206px, ${theme.white} 206px);

  @media screen and (max-width: 768px) {
    background: ${theme.blue};
  } */}
`

const StyledTitle = Title.extend`
  color: ${theme.purple};
  padding-bottom: 0px;
`

const BookFeature = ({
  data: {
    heading,
    content,
    bookImage: { fields: { file: { url: bookImageUrl } } }
  }
}) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Col xs={12} md={6}>
        <StyledTitle>{heading}</StyledTitle>
        {/* <Subtitle>{`by ${author}`}</Subtitle> */}
        <Content>
          <ReactMarkdown source={content} />
        </Content>
      </Col>
      <Col xs={12} md={6}>
        <Image responsive src={`https:${bookImageUrl}`} />
      </Col>
    </Col>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
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
  </WithThemePage>
)

export default BookFeature;
