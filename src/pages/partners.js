import React from 'react'
import { Link } from 'gatsby'
import gatsbyIcon from '../images/gatsby-icon.png'
import SemiContainer from '../components/SemiContainer'
import Details from '../components/Details'
import Footer1 from '../components/Footer1'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const partnersPage = () => (
  <Layout>
    <SEO title="Partners" />
    <SemiContainer>
      <h2>Working closely with industry</h2>
      <h2>leaders to offer the best</h2>
    </SemiContainer>
    <SemiContainer>
      <div className="center">
        <h2>Our Partners</h2>
        <div className="display1">
          <img alt="temp image1" src={gatsbyIcon} class="img1" />
          <img alt="temp image1" src={gatsbyIcon} class="img1" />
          <img alt="temp image1" src={gatsbyIcon} class="img1" />
          <img alt="temp image1" src={gatsbyIcon} class="img1" />
        </div>
      </div>
    </SemiContainer>
    <SemiContainer>
      <h2>Clients we work with</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </SemiContainer>
    <SemiContainer>
      <div className="center">
        <h2>Become outstanding</h2>
        <h2 className="margin-bottom">Talk to us today.</h2>
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

export default partnersPage
