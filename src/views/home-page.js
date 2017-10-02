import React, { Component } from 'react'
import { connect } from 'react-redux'
import Scroll from 'react-scroll'
import { Grid } from 'react-bootstrap'

import Landing from '../components/landing'
import Mission from '../components/mission'
import Story from '../components/story'
import BookFeature from '../components/book-feature'
import Footer from '../components/footer'

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
        story: { fields: story },
        emmaFeature: { fields: emmaFeature },
      } = this.props.content

      return (
        <div>
          <Landing />
          <Grid fluid>
            <Element name='Mission'>
              <Mission data={mission} />
            </Element>
            <Story data={story} />
            <BookFeature data={emmaFeature} />
            <Footer />
          </Grid>
        </div>
      )
    }

    return (
      <div></div>
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
