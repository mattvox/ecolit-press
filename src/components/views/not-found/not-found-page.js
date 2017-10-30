import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Grid, Row } from 'react-bootstrap'
import { Title } from '../../styled/theme'

class NotFoundPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={10} xsOffset={1} style={{ textAlign: 'center' }}>
            <Title>404: Page Not Found</Title>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(NotFoundPage);
