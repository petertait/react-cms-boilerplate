import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.header`
  background: grey;
  padding: 20px;
`

const Nav = styled.nav`

`

const A = styled.a`
  color: red;
`

const Header = (props) => {
  return (
    <Wrapper>
      <Nav>
        <Link href="/"><A>Home</A></Link>
        <Link href="/about"><A>About</A></Link>
      </Nav>
    </Wrapper>
  )
}

export default Header
