import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import Story from '../components/story'
import Author from '../components/author'
import Header from '../components/header'

import { fetchPageData } from '../../actions'

class AboutPage extends Component {
  componentDidMount() {
    this.props.fetchPageData('about', 'bijmWHfimcU0saoOQcsgc')
  }

  render() {
    if (this.props.isFetched) {
      const {
        story: { fields: story },
        author: { fields: author },
      } = this.props.content

      return (
        <Grid fluid>
          <Header />
          <Story data={story} />
          <Author data={author} />
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
    content: state.pages.about.data,
    isFetched: state.pages.about.isFetched
  }
}

export default connect(mapStateToProps, { fetchPageData })(AboutPage);
