import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Body = styled.div`
  height: 100vh;
`

const UnderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top: 3rem solid #BEB0A7;
  border-left: 3rem solid #BEB0A7;

  padding: 1rem;

  @media(max-width: 420px) {
    flex-direction: column;
    border: 0;
    border-top: 3rem solid #BEB0A7;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <Body>
        <UnderBody>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {children}
        </UnderBody>
      </Body>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
