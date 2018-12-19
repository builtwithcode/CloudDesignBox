import React from 'react'
// import { Link } from 'gatsby'
// import Container from '../components/Container'
import BigContainer from '../components/BigContainer'
import SemiContainer from '../components/SemiContainer'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../components/Styles/style.css'

const contactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <SemiContainer>
      <h2>Send us a message, give us a</h2>
      <h2>call or fill out the form below</h2>
    </SemiContainer>
    <div className="gray">
      <SemiContainer>
        <div className="center">
          <h2>Our Details</h2>
          <div className="grid-container4">
            <p className="blue-text">Times</p>
            <p className="blue-text">Phone</p>
            <p className="blue-text">Email</p>
            <p>9am - 5pm - Mon - Fri GMT</p>
            <p>(+44) 01482 844 085</p>
            <p>info@clouddesignbox.co.uk</p>
          </div>
        </div>
      </SemiContainer>
    </div>
    <BigContainer>
      <div id="center">
        <div>
          <div>
            <form
              name="contact"
              method="post"
              action="/success"
              netlify-honeypot="bot-field"
              netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <div className="name">
                <label htmlFor="name">Name*</label>{' '}
              </div>
              <input
                type="text"
                name="name"
                id="name"
                className="name1"
                required
              />
              <div className="company">
                <label htmlFor="company">Company*</label>{' '}
              </div>
              <input
                type="text"
                name="company"
                id="company"
                className="company1"
                required
              />
              <div className="email">
                <label htmlFor="email">Email*</label>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className="email1"
                required
              />
              <div className="phone">
                <label htmlFor="phone">Phone</label>
              </div>
              <input
                type="int"
                name="phone"
                id="phone"
                className="phone1"
                required
              />
              <div className="service">
                <label htmlFor="service">Service*</label>
              </div>
              <input
                type="text"
                name="service"
                id="service"
                className="service1"
                required
              />
              <div className="message">
                <label htmlFor="message">Your Message*</label>{' '}
              </div>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="message1"
                required
              />
              <input
                type="checkbox"
                name="GDPR"
                value="agree"
                className="gdpr"
              />
              I confirm GDPR etc etc
              <input type="submit" value="Send" className="special" />
            </form>
          </div>
        </div>
      </div>
    </BigContainer>
    <Details />
    <Footer />
  </Layout>
)

export default contactPage
