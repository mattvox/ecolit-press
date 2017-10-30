import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Subtitle, Content } from '../../styled/theme'

import { StyledTitle } from './styled/styled-book-landing'

import SectionContainer from '../../section-container'

const BookLanding = ({
  data: {
    bookTitle,
    author,
    content,
    bookImage: { fields: { file: { url: bookImageUrl } } }
  }
}) => (
  <SectionContainer landing>
    <StyledTitle>{bookTitle}</StyledTitle>
    <Subtitle>{`by ${author}`}</Subtitle>
    <Content>
      <ReactMarkdown source={content} />
    </Content>
  </SectionContainer>
)

export default BookLanding
