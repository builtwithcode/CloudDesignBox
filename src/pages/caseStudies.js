import React from 'react'
import { Link } from 'gatsby'
import gatsbyIcon from '../images/gatsby-icon.png'
import BigContainer1 from '../components/BigContainer1'
import SemiContainer from '../components/SemiContainer'
// import Container from '../components/Container'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const caseStudiesPage = () => (
  <Layout>
    <SEO title="Case Studies" />
    <SemiContainer>
      <h2>Read what our customers</h2>
      <h2>say about us</h2>
    </SemiContainer>
    <div className="gray">
      <BigContainer1>
        <div class="user">
          <Link to="/caseStudyInner" className="links">
            <h2 class="username">CAM Academy Trust</h2>
            <img alt="temp image1" src={gatsbyIcon} class="img" />
            <p class="excerpt">
              Short description about what they have done for this organisation.
              Click to read more!
            </p>
          </Link>
        </div>

        <div class="user">
          <Link to="/caseStudyInner" className="links">
            <h2 class="username">CAM Academy Trust</h2>
            <img alt="temp image1" src={gatsbyIcon} class="img" />
            <p class="excerpt">
              Short description about what they have done for this organisation.
              Click to read more!
            </p>
          </Link>
        </div>
        <div class="user">
          <Link to="/caseStudyInner" className="links">
            <h2 class="username">CAM Academy Trust</h2>
            <img alt="temp image1" src={gatsbyIcon} class="img" />
            <p class="excerpt">
              Short description about what they have done for this organisation.
              Click to read more!
            </p>
          </Link>
        </div>
        <div class="user">
          <Link to="/caseStudyInner" className="links">
            <h2 class="username">CAM Academy Trust</h2>
            <img alt="temp image1" src={gatsbyIcon} class="img" />
            <p class="excerpt">
              Short description about what they have done for this organisation.
              Click to read more!
            </p>
          </Link>
        </div>
      </BigContainer1>
    </div>
    <div className="center">
      <SemiContainer>
        <div className="gap" />
        <p>Learn more about how we can</p>
        <p>help your school or business</p>
        <button className="education">Education</button>
        <button className="business">Business</button>
      </SemiContainer>
    </div>
    <Details />
    <Footer />
  </Layout>
)

export default caseStudiesPage
