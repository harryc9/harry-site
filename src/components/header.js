import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'

const Navlink = styled.div`
  p {
    margin: 1rem 0 0 0;
  }
`

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#8B9D83',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <p>Harry Choi</p>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
