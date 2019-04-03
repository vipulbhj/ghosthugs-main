import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CARD from '../components/card';
import Tile from '../components/tile';
import CustomAnalytic from '../components/CustomAnalytic';


import ai from '../images/ai.png';
import app from '../images/app.jpg';
import analytics from '../images/analytics.png';
import azure from '../images/azure.svg';
import cover from '../images/cover.jpg';


const IndexPage = () => {
  const workAreas = [
    'BI', 
    'Data Analytics', 
    'CI/CD', 
    'DevOps',
    'Logistics', 
    'Azure', 
    'AWS', 
    'React JS', 
    'Node JS',
    'web dev',
    'react native',
  ]; 
  return (
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
                <CARD src={azure} title="IaaS and Automation" des="DevOps powered by Microsoft Azure" />
                <CARD src={app} title="App Development" des="Cross Platform or PWA, whatever suits your business better we have it" />
                <CARD src={analytics} title="Business Analytics" des="Understand your audience better with data extracted facts" />
              </div>
            </div>
          </section>
          <aside className="home-meta-info">
            <h3>We Specialize In</h3> 
            {
              workAreas.map((item,key) => {
                  return <Tile key={key} value={item} />
              })
            }
          </aside>
          <div className="home-second-slider" style={{
            backgroundImage: `url('${cover}')`
          }}>
            <article>
              <p>
                perfection is achieved not when there is nothing to add but when there is nothing to take away.
              </p>
            </article>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage;
