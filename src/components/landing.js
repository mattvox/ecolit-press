import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Scroll from 'react-scroll'
import DownArrow from './down-arrow'
import { Link } from 'react-router-dom'
import { Title, Subtitle } from './styled/theme'
import { Container, Background, ContentContainer } from './styled/landing'

// in-page scroll link from react-scroll
const AnchorLink = Scroll.Link

const Landing = (props) => (
  <Container>
    <Background />
    <ContentContainer>
      <Grid fluid>
        <Row>
          <Col xs={8} xsOffset={2} md={6} mdOffset={3}>
            <Title>ecolit</Title>
            <Subtitle>
              Fostering empathy and sustainability one story at a time
            </Subtitle>
          </Col>
        </Row>
      </Grid>
    </ContentContainer>
    <AnchorLink to={'Mission'} spy={true} smooth={true}>
      <DownArrow />
    </AnchorLink>
  </Container>
)

export default Landing
