import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Container, theme } from './styled/theme'

const SectionContainer = (props) => {
  const { bg, fg } = props
  const { children, ...containerProps } = props

  return (
    <Container {...containerProps}>
      <Grid fluid>
        <Row>
          <Col
            xs={12}
            md={10}
            mdOffset={1}
            style={{
              background: bg || theme.offWhite,
              color: fg || theme.darkGray,
            }}
          >
            <Row
              style={{
                paddingTop: '40px',
                paddingBottom: '40px',
              }}
            >
              <Col
                xs={12}
                sm={10}
                smOffset={1}
              >
                {children}
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

export default SectionContainer;
