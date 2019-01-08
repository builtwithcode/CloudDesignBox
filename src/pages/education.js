import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/Container'
import BigContainer from '../components/BigContainer'
import SemiContainer from '../components/SemiContainer'
import Details from '../components/Details'
import Footer1 from '../components/Footer1'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const educationPage = () => (
  <Layout>
    <SEO title="Education" />
    <div className="gap" />
    <Container>
      <p>
        <strong className="blue-strong">Online learning your way</strong>
      </p>
      <p>take the weight out of</p>
      <p className="margin-bottom">school work.</p>
      <Link to="/contact" className="contact-button">
        Contact Us
      </Link>
    </Container>
    <div className="blue">
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
            <button className="package-button">Choose Package</button>
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
            <button className="package-button">Choose Package</button>
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
            <button className="package-button">Choose Package</button>
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
      <p>some bullet pointed info</p>
      <p>text</p>
      <p>some bullet pointed info</p>
      <p>text</p>
      <p>some bullet pointed info</p>
      <p>text</p>
    </Container>
    <SemiContainer>
      <div className="center">
        <h2>
          Create the <strong className="blue-strong">prefect learning</strong>
        </h2>
        <h2>
          <strong className="blue-strong">enviroment</strong> at your school
        </h2>
        <Link to="/contact" className="contact-button">
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
        <h2>
          <strong className="blue-strong">Become outstanding</strong>
        </h2>
        <h2>Talk to us today.</h2>
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </div>
    </SemiContainer>
    <div className="gray1">
      <Details />
    </div>
    <Footer1 />
  </Layout>
)

export default educationPage
