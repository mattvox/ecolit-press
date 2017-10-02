import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import Scroll from 'react-scroll'
import DownArrow from './down-arrow'
import { Subtitle } from './styled/theme'
import { Container, Background, ContentContainer } from './styled/landing'

// in-page scroll link from react-scroll
const AnchorLink = Scroll.Link

const Landing = (props) => (
  <Container>
    <Background />
    <ContentContainer>
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3} md={4} mdOffset={4}>
            <Image
              style={{ paddingBottom: '20px' }}
              src={`https://images.contentful.com/dfr34shq95oy/72mgHuTGuIeAgCogIc2Qak/cd34672be26bc1e173658ceb7307977c/EcoLitLogo_White_web.png`}
              responsive
            />
          </Col>
          <Col xs={8} xsOffset={2} md={6} mdOffset={3}>
            <Subtitle>
              Fostering empathy and sustainability one story at a time
            </Subtitle>
          </Col>
        </Row>
      </Grid>
    </ContentContainer>
    <AnchorLink activeClass='active' to={'Mission'} spy={true} smooth={true}>
      <DownArrow />
    </AnchorLink>
  </Container>
)

export default Landing
