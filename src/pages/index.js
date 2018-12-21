import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CARD from '../components/card';

import ai from '../images/ai.png';
import app from '../images/app.jpg';
import analytics from '../images/analytics.png';


const IndexPage = () => (
  <>
  <SEO title="Home" keywords={['ghosthugs', 'home', 'IT', 'company']} />
  <Layout>
    <div className="home-page">
      <div className="home-main-slider">
        <h2>ghosthugs</h2>
        <small>The Tech hussle is real, leave it to us and grow your comapany fastest.</small>
      </div>
      <section className="home-info">
        <h3>What we do</h3>
        <div className="slider">
          <div className="slides">
            <CARD src={ai} title="Machine Learning" des="We provide experties in the domain of ML and AI" />
            <CARD src={app} title="App Development" des="Cross Platform or PWA, whatever suits your business better we have it" />
            <CARD src={analytics} title="Business Analytics" des="Understand your audience better with data extracted facts" />
            <CARD src={ai} title="Machine Learning" des="We provide experties in the domain of ML and AI" />
          </div>
        </div>
      </section>
      <aside className="home-meta-info"></aside>
      <div className="home-second-slider"></div>
    </div>
  </Layout>
  </>
)

export default IndexPage;
