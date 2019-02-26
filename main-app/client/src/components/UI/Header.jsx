import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className='header--container'>
        <Link to="/"><b>Heart</b></Link>
        <Link to="/participants">Participants</Link>
        <Link to="/form">Intake Upload</Link>
        <Link to="/reporting">Reporting</Link>
        <div className="header--search-bar">
            <input type="text" placeholder="Search here..." className="search-bar"></input>
            <button><i className="fas fa-search fa-lg"></i></button>
        </div>
      </header>
    )
  }
}

export default Header;