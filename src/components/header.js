import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    showMenu: false
  }

  toggleMenu = () => {
    this.setState(({showMenu}) => {
      return {
        showMenu: !showMenu 
      }
    });
  }

  render() {
    return (
    <div className="Navbar">
      <div className="Navbar__Link Navbar__Link-brand">
        ghosthugs
      </div>
      <div className="Navbar__Link-toggle">
        <button onClick={this.toggleMenu}>&#9776;</button>
      </div>
      {this.state.showMenu ?
      <nav className="Navbar__Items">
        <div className="Navbar__Link">
          <Link to="/">Home</Link>
        </div>
        <div className="Navbar__Link">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="Navbar__Link">
          <Link to="/about">About</Link>
        </div>
      </nav> : ''}
    </div>
  )}
} 
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header;
