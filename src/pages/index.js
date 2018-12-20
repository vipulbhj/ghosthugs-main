import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import imgSrc from '../images/cover.jpg';

console.log(imgSrc);

const IndexPage = () => (
  <>
  <SEO title="Home" keywords={['ghosthugs', 'home', 'IT', 'company']} />
  <Layout>
    <h3>Home</h3>
  </Layout>
  </>
)

export default IndexPage;
