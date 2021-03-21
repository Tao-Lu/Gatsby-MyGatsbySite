/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteInfoQuery {
      site {
        siteMetadata {
          title
          description
          author
          navLinks
        }
      }
    }
  `)

  return (
    <>
      <div style={{minHeight:`100vh`}}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} siteNavLinks={data.site.siteMetadata?.navLinks || []} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 750,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer siteAuthor={data.site.siteMetadata?.author || `Author`} />
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
