import React, { Component } from 'react'
import { connect } from 'react-redux'
import Scroll from 'react-scroll'
import { Grid } from 'react-bootstrap'

import Landing from '../components/landing'
import Mission from '../components/mission'
import BookFeature from '../components/book-feature'
// import Contact from '../components/contact'

import { fetchPageData } from '../actions'


class HomePage extends Component {
  componentDidMount() {
    this.props.fetchPageData('home', '4OQitB7Enm466COeq0meCI')
  }

  render() {
    // provides a scroll anchor target from
    // react-scroll
    const Element = Scroll.Element

    if (this.props.isFetched) {
      const {
        mission: { fields: mission },
        emmaFeature: { fields: emmaFeature },
      } = this.props.content

      return (
        <div>
          <Landing />
          <Grid fluid>
            <Element name='Mission'>
              <Mission data={mission} />
            </Element>
            <BookFeature data={emmaFeature} />
          </Grid>
        </div>
      )
    }

    return (
      <div>loading...</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    content: state.pages.home.data,
    isFetched: state.pages.home.isFetched
  }
}

export default connect(mapStateToProps, { fetchPageData })(HomePage)
