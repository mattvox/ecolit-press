// import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Scroll from 'react-scroll'
import { Grid } from 'react-bootstrap'

import Landing from '../landing'
import Mission from '../mission'
import Story from '../story'
import BookFeature from '../book-feature'
import Footer from '../footer'

import { fetchPageData, snapshotSiteData } from '../../actions'

const pageObj = [
  { name: 'home', id: '4OQitB7Enm466COeq0meCI' },
  { name: 'book', id: '68RN7ii6woQEOmwcCYwiuo' },
  { name: 'contact', id: '69C3xeSrsIyI4YiyqQQ4mg' },
]

class HomePage extends Component {


  componentDidMount() {
    // this.props.fetchPageData('home', '4OQitB7Enm466COeq0meCI')
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

export default connect(mapStateToProps, { fetchPageData, snapshotSiteData })(HomePage)

// to be added later in a future build when most content is completely dynamic in nature

// ----------------------------------------------

// const test = _.map(this.props.content, data => {
//   const { fields: content } = data
//
//   // generic component / conditional
//
//   // if generic text component render
//   // <Generic data={content} />
//   // else if special static component render
//   // <Special data={content}
//   // or with switch statement or something
//   return <Mission data={content} />
// })
//
// console.log(test)
