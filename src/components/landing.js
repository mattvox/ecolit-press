import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Scroll from 'react-scroll'
import DownArrow from './down-arrow'
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
              This is the landing section.
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

export default Landing;
