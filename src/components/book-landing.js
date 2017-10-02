import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import {
  Page,
  Title,
  Subtitle,
  Content,
  theme,
} from './styled/theme'

export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background:
  url(https://images.contentful.com/dfr34shq95oy/3e4bgpqsPumuswKM66Wa2k/d3124f202ea009b5deb0c0daaf5b56d0/Jonah_with_blue.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  ${'' /* -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain; */}
`

export const Container = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100vh;
  position: relative;
  width: 100%;
  text-align: left;
  ${'' /* background-color: ${theme.blue}; */}
`

export const ContentContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  color: #F3FBF6;
  ${'' /* transform: translateY(-50%); */}
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
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={1}>
              <Col xs={12} md={6}>
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
