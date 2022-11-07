import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-300 p-4 rounded-xl  shadow-lg shadow-indigo-500/50  ">
      <div className="navbar-start">
        <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/services'>Searvise</NavLink>
          </li>
          <li>
            <NavLink to='/revew'>Revew</NavLink>
          </li>
          <li>
            <NavLink to='/bolg'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Log in</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>Sign up</NavLink>
          </li>
        </ul>
      </div>

      {/* responive manu  */}
     

      <div className="navbar-end gap-4">
      <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink>Item 1</NavLink>
            </li>

            <li>
              <NavLink>Item 3</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn">Get started</NavLink>
      </div>
    </div>
  );
};

export default Header;