import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Grid } from 'react-bootstrap'
import { Title, Page } from '../../styled/theme'

import Footer from '../../footer'

class NotFoundPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Page>
          <Col xs={10} xsOffset={1} style={{ textAlign: 'center' }}>
            <Title>404: Page Not Found</Title>
          </Col>
          </Page>
          <Footer />
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(NotFoundPage);
