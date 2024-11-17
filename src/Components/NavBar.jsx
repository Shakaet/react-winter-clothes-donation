import React from 'react';

const Navbar = ({ user, onLoginClick }) => {

    let link=<>

            <li><a href="/" className='font-extrabold text-xl text-yellow-600'>Home</a></li>
            <li><a href="/donateCampaign" className='font-extrabold text-xl text-yellow-600'>Donation Campaigns</a></li>
            <li><a href="/"className='font-extrabold text-xl text-yellow-600'>How to Help</a></li>
            <li><a href="/"className='font-extrabold text-xl text-yellow-600'>Dashboard</a></li>
    
    
    </>
  return (
    <div className="navbar bg-base-100 ">
      {/* Site Logo */}
      <div className="navbar-start">
        <a href="/" className="text-3xl font-extrabold text-primary">Winter Donation</a>
      </div>

      {/* Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-center lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
      </div>

      {/* User Profile or Login Button */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="hidden md:inline-block">{user.displayName}</span>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={onLoginClick}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
