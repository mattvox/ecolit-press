import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Container, Title, Content, theme } from '../../styled/theme'
import { ImageList } from './styled/styled-story'

import SectionContainer from '../../section-container'

const Story = ({ data }) => {
  const { heading, content, images } = data

  const renderImages = images => images.map(image => {
    const { url } = image.fields.file
    const { id } = image.sys

    return (
      <li key={id}>
        <Col xs={12} sm={4}>
          <Image responsive src={`https:${url}`} />
        </Col>
      </li>
    )
  })

  return (
    <div>
      <SectionContainer bg={theme.offWhite}>
        <Title>{heading}</Title>
        <Content>
          <ReactMarkdown source={content} />
        </Content>
      </SectionContainer>
      <Container>
        <Grid fluid>
          <Row>
            <Col
              xs={12}
              md={10}
              mdOffset={1}
              style={{ padding: 0 }}
            >
              <ImageList>
                {renderImages(images)}
              </ImageList>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  )
}

export default Story
