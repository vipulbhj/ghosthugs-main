import React from 'react';
import { Link } from 'gatsby';

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
      <>
    <div className="Navbar">
      <div className="Navbar-brand">
        ghosthugs
      </div>
      <div className="Navbar-toggle">
        <button onClick={this.toggleMenu}>&#9776;</button>
      </div>
    </div>
    {
      this.state.showMenu ?
      <div className="Menu">
        <div className="Menu-naviagtion">
          <button onClick={this.toggleMenu}>&times;</button>
          <div className="Menu-items">
          <div className="Menu-link">
            <Link to="/">Home</Link>
          </div>
          <div className="Menu-link">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="Menu-link">
            <Link to="/about">About</Link>
          </div>
        </div></div>
      </div> : ''
    }
    </>
  )}
} 

export default Header;
