import React from 'react'
import { Link } from 'gatsby'
import BigContainer1 from '../components/BigContainer1'
import SemiContainer from '../components/SemiContainer'
// import Container from '../components/Container'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const communityPage = () => (
  <Layout>
    <SEO title="Community" />
    <SemiContainer>
      <h2>Great tips, tricks and guides</h2>
      <h2>to enhance your appearance</h2>
    </SemiContainer>
    <div className="gray">
      <div className="center">
        <div className="section">
          <h2>Create the prefect learning</h2>
          <h2>enviroment at your school</h2>
          <button className="contact-button">Youtube ➡</button>
          <button className="contact-button">Twitter ➡</button>
          <button className="contact-button">Linkedin ➡</button>
          <button className="contact-button">Facebook ➡</button>
        </div>
      </div>
    </div>
    <BigContainer1>
      <div className="padding">
        <div className="display">
          <h2>Blogs</h2>
          <Link to="/communityViewAll" className="view">
            View all blogs
          </Link>
        </div>
        <div className="grid-container2">
          <p className="grid-item1">Blog 1</p>
          <p className="grid-item1">Blog 2</p>
          <p className="grid-item1">Blog 3</p>
        </div>
      </div>
      <div className="padding">
        <div className="display">
          <h2>Videos</h2>
          <Link to="/communityViewAll" className="view1">
            View all videos
          </Link>
        </div>
        <div className="grid-container2">
          <p className="grid-item1">Video 1</p>
          <p className="grid-item1">Video 2</p>
          <p className="grid-item1">Video 3</p>
        </div>
      </div>
      <div>
        <div className="display">
          <h2>Podcasts</h2>
          <Link to="/communityViewAll" className="view2">
            View all Podcasts
          </Link>
        </div>
        <div className="grid-container2">
          <p className="grid-item1">Podcast 1</p>
          <p className="grid-item1">Podcast 2</p>
          <p className="grid-item1">Podcast 3</p>
        </div>
      </div>
    </BigContainer1>
    <SemiContainer>
      <div className="center">
        <div className="gap" />
        <p>We are SharePoint and</p>
        <p>Office 365 Specalists for</p>
        <p>Education and Business.</p>
        <button className="education">Education</button>
        <button className="business">Business</button>
      </div>
    </SemiContainer>
    <Details />
    <Footer />
  </Layout>
)

export default communityPage
