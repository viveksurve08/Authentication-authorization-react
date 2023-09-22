import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/account">Account</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
