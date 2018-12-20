import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import imgSrc from '../images/kobu-agency-798655-unsplash.jpg';

console.log(imgSrc);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['ghosthugs', 'home', 'IT', 'company']} />
    <div className="home-container">
      <div className="main-slider" style={{
        backgroundImage: `url('${imgSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left',
        backgroundRepeat: 'no-repeat'
      }}
     >
        <p>
          helping companies with the ideal tech solution for there product.
        </p>
      </div>

      <div className="content">B</div>
      <div className="adds">C</div>
      <div className="other-slider">D</div>
    </div>
  </Layout>
)

export default IndexPage;
