import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Scroll from 'react-scroll'
import DownArrow from './down-arrow'
import { Link } from 'react-router-dom'
import { Title, Subtitle } from './styled/theme'
import { Container, Background, Content } from './styled/landing'

// in-page scroll link from react-scroll
const AnchorLink = Scroll.Link

const Landing = (props) => (
  <Container>
    <Background>
      <Content>
        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <Title>Ecolit Logo</Title>
              <Subtitle>
                Fostering empathy and sustainability one story at a time
              </Subtitle>
              <Link to='/'>
                Home
              </Link>
              <Link to='/about'>
                About
              </Link>
              <Link to='/contact'>
                Contact
              </Link>
            </Col>
          </Row>
        </Grid>
      </Content>
      <AnchorLink to={'Mission'} spy={true} smooth={true}>
        <DownArrow />
      </AnchorLink>
    </Background>
  </Container>
)

export default Landing
