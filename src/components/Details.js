import React, { Component } from 'react'
import SemiContainer from './SemiContainer'
import './Styles/style.css'

class Details extends Component {
  render() {
    return (
      <SemiContainer>
        <p>Microsoft Partner image</p>
        <div className="grid-container1">
          <h3 className="smaller-font">Our Details</h3>
          <h3 className="smaller-font">Contact</h3>
          <h3 className="smaller-font">Useful Links</h3>
          <p>9am - 5am Mon - Fri GMT</p>
          <p>Twitter</p>
          <p>Blog</p>
          <p>T: (+44) 01482 844 085</p>
          <p>Youtube</p>
          <p>Privacy Policy</p>
          <p>E:info@clouddesignbox.co.uk</p>
          <p>Linkedin</p>
          <p>Contact us</p>
        </div>
      </SemiContainer>
    )
  }
}

export default Details
