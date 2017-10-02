import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Image } from 'react-bootstrap'
import {
  Page,
  Title,
  Subtitle,
  Content,
  theme,
} from './styled/theme'


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

const Author = ({
  data: {
    heading,
    author,
    content,
    authorPhoto: { fields: { file: { url: authorPhotoUrl } } }
  }
}) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Col xs={12} md={6}>
        <StyledTitle>{heading}</StyledTitle>
        <Subtitle>{author}</Subtitle>
        <Content>
          <ReactMarkdown source={content} />
        </Content>
      </Col>
      <Col xs={12} md={6}>
        <Image responsive src={`https:${authorPhotoUrl}`} />
      </Col>
    </Col>
  </WithThemePage>
)

export default Author;
