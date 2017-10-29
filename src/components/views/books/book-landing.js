import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-bootstrap'
import {
  Title,
  Subtitle,
  Content,
  theme,
} from '../../styled/theme'

export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background:
  url(https://images.contentful.com/dfr34shq95oy/3e4bgpqsPumuswKM66Wa2k/d3124f202ea009b5deb0c0daaf5b56d0/Jonah_with_blue.jpg);
  background-repeat: no-repeat;
  background-position: center top;

  @media screen and (max-width: 767px) {
    background: top;
    background-color: ${theme.blue};
  }
`

export const Container = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100vh;
  position: relative;
  width: 100%;
  text-align: left;
`

export const ContentContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  color: #F3FBF6;
`

const StyledTitle = Title.extend`
  color: ${theme.purple};
  padding-bottom: 0px;
`

const BookLanding = ({
  data: {
    bookTitle,
    author,
    content,
    bookImage: { fields: { file: { url: bookImageUrl } } }
  }
}) => (
  <Container>
    <Background />
      <ContentContainer>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={12} md={8} mdOffset={1}>
              <Col xs={12} sm={6}>
                <StyledTitle>{bookTitle}</StyledTitle>
                <Subtitle>{`by ${author}`}</Subtitle>
                <Content>
                  <ReactMarkdown source={content} />
                </Content>
              </Col>
            </Col>
          </Row>
        </Grid>
      </ContentContainer>
  </Container>
)

export default BookLanding;
