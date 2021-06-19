import React from "react";
import { Link, NavLink } from "react-router-dom";

import './css/navbar.css';
const Navbar = () => {
  return (
    <ul>
      {/* <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/products">Products</a>
      </li>
      <li>
        <a href="/admin">Admin</a>
      </li> */}

      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink activeClassName={"active"} to="/products">Products</NavLink>
      </li>

      <li>
        <Link to="/posts">Posts</Link>
      </li>

      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default Navbar;
