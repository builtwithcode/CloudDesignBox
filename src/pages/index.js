import React from 'react'
import Container from '../components/Container'
import SemiContainer from '../components/SemiContainer'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Container>
      <p>We are SharePoint and</p>
      <p>Office 365 Specalists for</p>
      <p>Education and Business.</p>
      <button className="education">Education</button>
      <button className="business">Business</button>
    </Container>
    <Container>
      <h2>Enhance your classrooms</h2>
      <h2> and workspaces</h2>
      <p>Cloud Design Box was founded</p>
    </Container>
    <SemiContainer>
      <div className="center">
        <h2>We offer great deals packages for</h2>
        <h2>Education and Business</h2>
        <button className="education">Education</button>
        <button className="business">Business</button>
      </div>
    </SemiContainer>
    <Container>
      <h2>The largest Sharepoint</h2>
      <h2>provider for Education</h2>
      <h2>and Business in the UK</h2>
      <p>Cloud Design Box was founded</p>
    </Container>
    <SemiContainer>
      <div className="center">
        <h2>Achieve more.</h2>
        <h2>Talk to us today.</h2>
        <button className="contact-button">Contact Us</button>
      </div>
    </SemiContainer>
    <Container>
      <div className="grid-container">
        <h2>Community Resources</h2>
        <div>Resource 1</div>
        <div>Resource 1</div>
        <div>Resource 1</div>
        <div>Resource 1</div>
        <div>Resource 1</div>
        <div>Resource 1</div>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
