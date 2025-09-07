import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false); // close menu after clicking a route
  };

  const navOptions = (
    <>
      <li><NavLink onClick={handleNavClick} to="/">Home</NavLink></li>
      <li><NavLink onClick={handleNavClick} to="/about">About Us</NavLink></li>
      <li><NavLink onClick={handleNavClick} to="/services">Services</NavLink></li>
      <li><NavLink onClick={handleNavClick} to="/donation">Donation</NavLink></li>
      <li><NavLink onClick={handleNavClick} to="/members">Members</NavLink></li>
      <li><NavLink onClick={handleNavClick} to="/projects">Projects</NavLink></li>
    </>
  );

  return (
    <div className="fixed top-2 z-50 w-full">
      <div className="container mx-auto px-2">
        <div className="rounded-xl navbar bg-base-100 shadow-md">
          {/* Left section */}
          <div className="navbar-start">
            {/* Mobile menu */}
            <div className="dropdown">
              <button
                tabIndex={0}
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-ghost lg:hidden"
              >
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
              </button>

              {isOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navOptions}
                </ul>
              )}
            </div>

            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Alor Disha Foundation
            </Link>
          </div>

          {/* Center section (desktop menu) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>

          {/* Right section */}
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
