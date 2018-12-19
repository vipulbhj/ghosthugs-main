import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

import './layout.css';
import './custom.css';

const Layout = ({ children }) => (
  <>
  <div className="layout-container">
    <Header />
    <div className="main-content">
      {children}
    </div>
  </div>
  <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
