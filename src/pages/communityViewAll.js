import React from 'react'
// import { Link } from 'gatsby'
import BigContainer from '../components/BigContainer'
// import SemiContainer from '../components/SemiContainer'
// import Container from '../components/Container'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const communityViewAllPage = () => (
  <Layout>
    <SEO title="CommunityViewAll" />
    <BigContainer>
      <h2>All "" Articles</h2>
      <div className="grid-container3">
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
        <p className="grid-item1">Item 1</p>
      </div>
      <button className="load-more">Load More</button>
    </BigContainer>
    <Details />
    <Footer />
  </Layout>
)

export default communityViewAllPage
