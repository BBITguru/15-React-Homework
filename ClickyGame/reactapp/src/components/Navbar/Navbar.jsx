import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return <nav className="navbar-light bg-danger">
    <a className="navbar" href="/">
      <img src="images/logo.svg" width="50px" height="50px" alt="logo" />
        &nbsp;&nbsp;&nbsp; Clicky React Memory Game &nbsp;&nbsp;&nbsp;
      <img src="images/logo.svg" width="50px" height="50px" alt="logo" />
    </a>
  </nav>;
};

export default Navbar;