import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle, siteNavLinks }) => (
  <header
    style={{
      background: `#464d77`,
      marginBottom: `1.45rem`,
      textAlign:`center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontSize: `5rem`,
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <nav style={{padding: `1.3rem 0 1.3rem 0`}}>
        {
          siteNavLinks.map((navLink) => {
            return (
              <Link className='navLink' activeClassName='activedNavLink' key={navLink.toLowerCase()} to={navLink === `Home` ? `/` : `/${navLink.toLowerCase()}`} style={{fontSize:`2rem`, margin:`0 1.3rem 0 1.3rem`, textDecoration:`none`}}>{navLink}</Link>
            )
          })
        }
      </nav>
    </div>
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteNavLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  siteNavLinks: [],
}

export default Header
