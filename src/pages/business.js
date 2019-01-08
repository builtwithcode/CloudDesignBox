import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/Container'
import BigContainer from '../components/BigContainer'
import SemiContainer from '../components/SemiContainer'
import Footer1 from '../components/Footer1'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const businessPage = () => (
  <Layout>
    <SEO title="Business" />
    <div className="gap" />
    <Container>
      <h2 className="red-strong">Tailored SharePoint Solutions.</h2>
      <p>Make your business</p>
      <p className="margin-bottom">more efficient.</p>
      <Link to="/contact" className="contact-button1">
        Contact Us
      </Link>
    </Container>
    <div className="red">
      <BigContainer>
        <div className="center1">
          <h2>Intranet</h2>
          <p>lots of small text.</p>
        </div>
        <div className="package-display">
          <article>
            <h3 className="smaller-font1">Cloud Box 1</h3>
            <p className="padding-left">Some content</p>
            <p className="padding-left">Some content</p>
            <p className="padding-left">Some content</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <button className="package-button1">Choose Package</button>
          </article>
          <article>
            <h3 className="smaller-font1">Cloud Box 1</h3>
            <p className="padding-left">Some content</p>
            <p className="padding-left">Some content</p>
            <p className="padding-left">Some content</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <button className="package-button1">Choose Package</button>
          </article>
          <article>
            <h3 className="smaller-font1">Cloud Box 1</h3>
            <p className="padding-left">Some content</p>
            <p className="padding-left">Some content</p>
            <p className="padding-left">Some content</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left">some content in blue</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <p className="padding-left"> some more content in a faded gray</p>
            <button className="package-button1">Choose Package</button>
          </article>
        </div>
      </BigContainer>
    </div>
    <Container>
      <h2>Work quickly, efficiently and</h2>
      <h2>evolve your business</h2>
      <p>some bullet pointed info</p>
      <p>text</p>
      <p>some bullet pointed info</p>
      <p>text</p>
      <p>some bullet pointed info</p>
      <p>text</p>
    </Container>
    <SemiContainer>
      <div className="center">
        <p className="red-strong">Work better and Smarter.</p>
        <p className="margin-bottom">talk to us today.</p>
        <Link to="/contact" className="contact-button2">
          Contact Us
        </Link>
      </div>
    </SemiContainer>
    <Container>
      <h2>Easily manage staff on</h2>
      <h2>the same, integrated</h2>
      <h2>platform</h2>
      <p>some bullet pointed info</p>
      <p>text</p>
      <p>some bullet pointed info</p>
      <p>text</p>
      <p>some bullet pointed info</p>
      <p>text</p>
    </Container>
    <SemiContainer>
      <div className="center">
        <p className="red-strong">Allow your business to evolve.</p>
        <p className="margin-bottom">talk to us today.</p>
        <Link to="/contact" className="contact-button2">
          Contact Us
        </Link>
      </div>
    </SemiContainer>
    <div className="gray1">
      <SemiContainer>
        <p>Microsoft Partner image</p>
        <div className="grid-container1">
          <h3 className="smaller-font2">Our Details</h3>
          <h3 className="smaller-font2">Contact</h3>
          <h3 className="smaller-font2">Useful Links</h3>
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
    </div>
    <Footer1 />
  </Layout>
)

export default businessPage
