import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Styles/style.css'

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/education" className="nav-link">
          Education
        </Link>
        <Link to="/business" className="nav-link">
          Business
        </Link>
        <Link to="/caseStudies" className="nav-link">
          Case Studies
        </Link>
        <Link to="/community" className="nav-link">
          Community
        </Link>
        <Link to="/partners" className="nav-link">
          Partners
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    )
  }
}

export default Nav
