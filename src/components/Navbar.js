import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
       <h1>SUNFLOWER</h1> 
      </div>
      <ul className='navbar-menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/picture'>Pictures</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;

