import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Nav from './Nav'

const Header = ({ siteTitle }) => (
  <div
    style={{
      // background: 'rebeccapurple',
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
            color: 'gray',
            textDecoration: 'none',
            fontSize: '20px',
            float: 'left',
            marginRight: '140px',
            display: 'inline-flex',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Nav />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
