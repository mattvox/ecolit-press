import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Row, Col, Image } from 'react-bootstrap'
import { Page, Title, Subtitle, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  ${'' /* background-color: ${theme.blue}; */}
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


// export const Title = styled.h1`
//   font-family: 'Bitter', serif;
//   font-size: 4em;
//   font-weight: bold;
//   letter-spacing: -1px;
//   margin: 0;
//   padding-top: 20px;
//   padding-bottom: 60px;
// `

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
  </WithThemePage>
)

export default BookFeature;

// images.contentful.com/dfr34shq95oy/1FRdgFPkLCwaoau0sOqsK2/8489a5b47e71ac0a943de2ab98e59b21/Emma_web.png
