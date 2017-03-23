import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'

export default class extends React.Component {


  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Head>
          <title>About</title>
        </Head>
        <Header>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </Header>
      </div>
    )
  }
}
