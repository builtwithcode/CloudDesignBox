import React from 'react'
import Container from '../components/Container'
import SemiContainer from '../components/SemiContainer'
import BigContainer from '../components/BigContainer'
import Layout from '../components/layout'
import Details from '../components/Details'
import Footer from '../components/Footer'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Container>
      <div className="gap" />
      <p>
        We are <strong className="blue-strong">SharePoint</strong> and
      </p>
      <p>
        <strong className="blue-strong">Office 365</strong> Specalists for
      </p>
      <p className="margin-bottom">Education and Business.</p>
      <Link to="/education" className="education">
        Education
      </Link>
      <Link to="/business" className="business">
        Business
      </Link>
    </Container>
    <Container>
      <h2>Enhance your classrooms</h2>
      <h2> and workspaces</h2>
      <p className="smaller-font-gray">
        Cloud Design Box was founded by Tony Philips, who has
      </p>
      <p className="smaller-font-gray">
        over 10 years' experience with SharePoint in education
      </p>
      <p className="smaller-font-gray1">and business.</p>
      <p className="smaller-font-gray">
        We are Microsoft Partner that specialises in creating
      </p>
      <p className="smaller-font-gray">
        engaging innovative solutions for SharePoint and Office
      </p>
      <p className="smaller-font-gray">
        365. Our passion is to enhance the classroom and
      </p>
      <p className="smaller-font-gray">
        workplace with technology that delivers real benefits to
      </p>
      <p className="smaller-font-gray">school and businesses.</p>
    </Container>
    <SemiContainer>
      <div className="center">
        <h2>
          We offer <strong className="blue-strong">great packages</strong> for
        </h2>
        <h2 className="margin-bottom">Education and Business</h2>
        <Link to="/education" className="education">
          Education
        </Link>
        <Link to="/business" className="business">
          Business
        </Link>
      </div>
    </SemiContainer>
    <Container>
      <h2>The largest Sharepoint</h2>
      <h2>provider for Education</h2>
      <h2>and Business in the UK</h2>
      <p className="smaller-font-gray">
        Our vision is to provide innovative engaging tools for
      </p>
      <p className="smaller-font-gray">
        educators by being the largest SharePoint learning
      </p>
      <p className="smaller-font-gray1">
        platform provider in the UK education market.
      </p>

      <p className="smaller-font-gray">
        Our cutting-edge business intranet platform will help
      </p>
      <p className="smaller-font-gray">
        companies across the world collaborate and become
      </p>
      <p className="smaller-font-gray">
        more efficent. we will develop solid long-term
      </p>
      <p className="smaller-font-gray">
        relationships with our customers to guide them through
      </p>
      <p className="smaller-font-gray">
        the fast paced and ever-changing world of technology.
      </p>
    </Container>
    <SemiContainer>
      <div className="center">
        <h2>
          <strong className="blue-strong">Achieve more.</strong>
        </h2>
        <h2 className="margin-bottom">Talk to us today.</h2>
        <Link to="contact" className="contact-button">
          Contact Us
        </Link>
      </div>
    </SemiContainer>
    <div className="gray">
      <BigContainer>
        <h2 className="margin-top">Community Resources</h2>
        <div className="grid-container">
          <div className="grid-item">Resource 1</div>
          <div className="grid-item">Resource 1</div>
          <div className="grid-item">Resource 1</div>
          <div className="grid-item">Resource 1</div>
        </div>
      </BigContainer>
    </div>
    <Details />
    <Footer />
  </Layout>
)

export default IndexPage
