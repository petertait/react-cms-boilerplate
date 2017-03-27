import React from 'react'
import Prismic from 'prismic.io'
import { DocumentById } from 'react-prismic-hocs'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'

export default class extends React.Component {
  // static async getInitialProps () {
  //
  // }

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <DocumentById
        url={'https://react-cms-boilerplate.prismic.io/api'}
        id={'home'}
      >
        {({loading, prismic, error}) => (
          <div>
            {!loading && prismic &&
              <div>{prismic.data['title']}</div>
            }
          </div>
        )}
      </DocumentById>
    )
  }
}
