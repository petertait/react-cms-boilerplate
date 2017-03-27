import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.header`
  background: grey;
  padding: 20px;
`

const Home = (props) => {
  return (
    <h2>{this.props.prismic.data['title']}</h2>
  )
}

export default Home
