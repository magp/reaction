import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Welcome to Furb</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Layout;
