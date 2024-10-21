import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">DEV@Deakin</div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="nav-links">
          <button>Post</button>
          <button>Login</button>
        </div>
      </nav>
      <div className="main-image">
        <img src="deakin.jpg" alt="Main" />
      </div>
    </header>
  );
};

export default Header;
