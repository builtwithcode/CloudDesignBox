import React from 'react'
// import { Link } from 'gatsby'
import Container from '../components/Container'
import BigContainer from '../components/BigContainer'
import SemiContainer from '../components/SemiContainer'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const businessPage = () => (
  <Layout>
    <SEO title="Business" />
    <div className="gap" />
    <Container>
      <h2 className="red-title">Tailored SharePoint Solutions.</h2>
      <p>Make your business</p>
      <p>more efficient.</p>
      <button className="contact-button1">Contact Us</button>
    </Container>
    <div className="red">
      <BigContainer>
        {/* Buttons need fixing but not quite sure how as of this
        moment */}
        <div className="center1">
          <h2>Intranet</h2>
          <p>lots of small text.</p>
        </div>
        <div className="package-display">
          <article>
            <h3 className="smaller-font1">Cloud Box 1</h3>
            <p>Some content</p>
            <p>Some content</p>
            <p>Some content</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <button className="package-button1">Choose Package</button>
          </article>
          <article>
            <h3 className="smaller-font1">Cloud Box 1</h3>
            <p>Some content</p>
            <p>Some content</p>
            <p>Some content</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <button className="package-button1">Choose Package</button>
          </article>
          <article>
            <h3 className="smaller-font1">Cloud Box 1</h3>
            <p>Some content</p>
            <p>Some content</p>
            <p>Some content</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p>some content in blue</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <p> some more content in a faded gray</p>
            <button className="package-button1">Choose Package</button>
          </article>
        </div>
      </BigContainer>
    </div>
    <Container>
      <h2>Supported MIS Integrated</h2>
      <p>Some text</p>
      <p> Logos of supported MIS</p>
    </Container>
    <Container>
      <h2>Enhance learning and bring</h2>
      <h2>classroom projects to life</h2>
      <p>some button pointed info</p>
      <p>text</p>
      <p>some button pointed info</p>
      <p>text</p>
      <p>some button pointed info</p>
      <p>text</p>
    </Container>
    <SemiContainer>
      <div className="center">
        <h2>Create the prefect learning</h2>
        <h2>enviroment at your school</h2>
        <button className="contact-button2">Contact Us</button>
      </div>
    </SemiContainer>
    <Container>
      <h2>Easily manage staff on</h2>
      <h2>the same, integrated</h2>
      <h2>platform</h2>
      <p>some button pointed info</p>
      <p>text</p>
      <p>some button pointed info</p>
      <p>text</p>
      <p>some button pointed info</p>
      <p>text</p>
    </Container>
    <SemiContainer>
      <div className="center">
        <h2>Become outstanding</h2>
        <h2>Talk to us today.</h2>
        <button className="contact-button2">Contact Us</button>
      </div>
    </SemiContainer>
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
    <Footer />
  </Layout>
)

export default businessPage
