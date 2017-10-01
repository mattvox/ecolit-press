import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import Mission from '../components/mission'
import BookFeature from '../components/book-feature'

import { fetchPageData } from '../actions'

class ContactPage extends Component {
  componentDidMount() {
    this.props.fetchPageData('contact', '4OQitB7Enm466COeq0meCI')
  }

  render() {
    if (this.props.isFetched) {
      const {
        mission: { fields: mission },
        emmaFeature: { fields: emmaFeature },
      } = this.props.content

      return (
        <Grid fluid>
          <Mission data={mission} />
          <BookFeature data={emmaFeature} />
        </Grid>
      )
    }

    return (
      <div>loading...</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    content: state.pages.contact.data,
    isFetched: state.pages.contact.isFetched
  }
}

export default connect(mapStateToProps, { fetchPageData })(ContactPage);
