import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

import './layout.css';
import './header-footer.css';

const Layout = ({ children }) => (
  <div className="layout-container">
    <header className="header">
      <Header />
    </header>
    <main className="user-content">
      {children}
    </main>
    <footer className="footer">
      <p>Made with love by ghosthugs</p>  
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
