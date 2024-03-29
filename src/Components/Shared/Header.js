import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  const { user, signoutff } = useContext(AuthContext);

  const handelsignout = () => {
    signoutff()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="navbar bg-base-300 p-4 rounded-xl  shadow-lg shadow-indigo-500/50  ">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src="https://i.ibb.co/FmHgBT1/eteacher-removebg-preview.png"  className="bg-white w-12 rounded-full" alt="" />
          <h1>e-teacher</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          {user?.uid ? (
            <li>
              <NavLink to="/myreviews">My Review</NavLink>
            </li>
          ) : undefined}
          {user?.uid ? (
            <li>
              <NavLink to="/mypost">My Post</NavLink>
            </li>
          ) : undefined}
          <li>
            <NavLink to="/addServices">Add Services</NavLink>
          </li>
          <li>
            <NavLink to="/bolg">Blogs</NavLink>
          </li>
          {user?.uid ? (
            <li>
              <button onClick={handelsignout} type="link">
                Sign out
              </button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* responive manu  */}

      <div className="navbar-end gap-4">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            
            <GiHamburgerMenu  className="h-5 w-5"/>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <NavLink to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          {user?.uid ? (
            <li>
              <NavLink to="/myreviews">My Review</NavLink>
            </li>
          ) : undefined} {user?.uid ? (
            <li>
              <NavLink to="/mypost">My Post</NavLink>
            </li>
          ) : undefined}
          <li>
            <NavLink to="/addServices">Add Services</NavLink>
          </li>
          <li>
            <NavLink to="/bolg">Blogs</NavLink>
          </li>
          {user?.uid ? (
            <li>
              <button onClick={handelsignout} type="link">
                Sign out
              </button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </>
          )}
          </ul>
        </div>

        {user?.uid ? (
          <div className="avatar online">
            <Link to="/profile">
              <div className="w-12 h-12 rounded-full">
                <img
                  src={user?.photoURL}
                  className="rounded-full border border-red-600"
                  alt="no img"
                />
              </div>
            </Link>
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Header;
