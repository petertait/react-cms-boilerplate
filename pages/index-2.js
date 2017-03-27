import React from 'react'
import Prismic from 'prismic.io'
import Head from 'next/head'

import Header from '../components/header'


const fetchPrismicData = () => new Promise((resolve, reject) => {
  Prismic.api('https://react-cms-boilerplate.prismic.io/api', (error, api) => {
    return api.getByUID('page', 'home').then(function(pageContent) {
      resolve.render('page', {
        pageContent: pageContent
      })
    }).then(resolve).catch(reject);
  });
});

export default class extends React.Component {
  static async getInitialProps () {
    return {
      pages: await fetchPrismicData()
    }
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { url, pages } = this.props
    console.log(pages)

    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Header />
        <h2></h2>
      </div>
    )
  }
}
