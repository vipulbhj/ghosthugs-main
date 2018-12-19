import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import './layout.css';
import './custom.css';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <div>Footer</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
