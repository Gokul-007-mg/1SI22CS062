import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
    <div className="font-bold text-xl">Lost & Found Platform</div>
    <div>
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/login" className="mx-2">Login</Link>
      <Link to="/register" className="mx-2">Register</Link>
    </div>
  </nav>
);

export default Navbar;
