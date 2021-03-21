import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteAuthor }) => (
  <footer
    style={{
      marginTop: `2rem`,
      textAlign: `center`,
      background: `grey`,
    }}
  >
    {siteAuthor} © 2021 - {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
