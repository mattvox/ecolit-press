import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Scroll from 'react-scroll'

import Landing from '../components/landing'
import Mission from '../components/mission'
import BookFeature from '../components/book-feature'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Loading from '../components/hocs/is-loading'


class HomePage extends Component {
  componentDidMount() {
    // const { dispatch } = this.props
  }

  renderLanding() {
    // const { data, isFetched } = this.props.landing

    return (
      <Landing />
    )
  }

  renderMission() {
    // const { data, isFetched } = this.props.about
    const MissionWithLoader = Loading(Mission)

    // provides a scroll anchor target from
    // react-scroll
    const Element = Scroll.Element

    return (
      <Element name='Mission'>
        <MissionWithLoader />
      </Element>
    )
  }

  renderBookFeature() {
    // const { data, isFetched } = this.props.skills
    const BookFeatureWithLoader = Loading(BookFeature)

    return (
      <BookFeatureWithLoader />
    )
  }

  renderContact() {
    // const { data, isFetched } = this.props.contact
    const ContactWithLoader = Loading(Contact)

    return (
      <ContactWithLoader />
    )
  }

  render() {
    return (
      <div>
        {this.renderLanding()}
        <Grid fluid>
          <Mission />
          <BookFeature />
          <Footer />
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(HomePage);
