import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import BookLanding from '../components/book-landing'
import BookPurchase from '../components/book-purchase'
import Author from '../components/author'
import Footer from '../components/footer'

import { fetchPageData } from '../actions'

class AboutPage extends Component {
  componentDidMount() {
    this.props.fetchPageData('book', '68RN7ii6woQEOmwcCYwiuo')
  }

  render() {
    if (this.props.isFetched) {
      const {
        emmaLanding: { fields: emmaLanding },
        emmaDetailed: { fields: emmaPurchase },
        author: { fields: author },
      } = this.props.content

      return (
        <div>
          <BookLanding data={emmaLanding} />
          <Grid fluid>
            <BookPurchase data={emmaPurchase} />
            <Author data={author} />
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
    content: state.pages.book.data,
    isFetched: state.pages.book.isFetched
  }
}

export default connect(mapStateToProps, { fetchPageData })(AboutPage);
