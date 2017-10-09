import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import Contact from '../components/contact'
import Footer from '../components/footer'

import { fetchPageData } from '../actions'

class ContactPage extends Component {
  componentDidMount() {
    this.props.fetchPageData('contact', '69C3xeSrsIyI4YiyqQQ4mg')
  }

  render() {
    console.log(this.props)
    if (this.props.isFetched) {
      const {
        contact: { fields: contact },
      } = this.props.content

      return (
        <Grid fluid>
          <Contact data={contact} />
          <Footer />
        </Grid>
      )
    }

    return (
      <div></div>
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
