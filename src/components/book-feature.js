import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Image } from 'react-bootstrap'
import {
  Page,
  Title,
  Subtitle,
  Content,
  LinkButton,
  theme
} from './styled/theme'


const WithThemePage = Page.extend`
  color: ${theme.darkGray};
  background: linear-gradient(${theme.blue} 206px, ${theme.white} 206px);

  @media screen and (max-width: 768px) {
    background: ${theme.blue};
  }
`

const StyledTitle = Title.extend`
  color: ${theme.white};
  padding-bottom: 0px;
`

const BookFeature = ({
  data: {
    bookTitle,
    author,
    content,
    bookImage: { fields: { file: { url: bookImageUrl } } }
  }
}) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Col xs={12} md={6}>
        <StyledTitle>{bookTitle}</StyledTitle>
        <Subtitle>{`by ${author}`}</Subtitle>
        <Content>
          <ReactMarkdown source={content} />
        </Content>
      </Col>
      <Col xs={12} md={6}>
        <Image responsive src={`https:${bookImageUrl}`} />
      </Col>
    </Col>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
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
    </Col>
  </WithThemePage>
)

export default BookFeature;
