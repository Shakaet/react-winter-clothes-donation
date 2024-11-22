import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Context } from './AuthProvider';

const Navbar = () => {

  let {user,signOuts}= useContext(Context)

  let l=useNavigate()

  let handleLogOut=()=>{
    signOuts()
    .then(()=>{
      l("/login")

    })
    .catch((error)=>{
      // console.log(error)
    })
  }

 

    let link=<>

            <li><NavLink to="/" className='font-extrabold text-xl text-yellow-600'>Home</NavLink></li>
            <li><NavLink to="/donateCampaign" className='font-extrabold text-xl text-yellow-600'>Donation Campaigns</NavLink></li>
            <li><NavLink to="/HowToHelp"className='font-extrabold text-xl text-yellow-600'>How to Help</NavLink></li>
            <li><NavLink to="/dashboard"className='font-extrabold text-xl text-yellow-600'>Dashboard</NavLink></li>
    
    
    </>
  return (
    <div className="navbar bg-base-100 ">
      {/* Site Logo */}
      <div className="navbar-start">
        <a href="/" className="text-3xl font-extrabold text-primary animate__animated animate__rubberBand">Winter Donation</a>
      </div>

      {/* Navigation Links */}
      <div className="navbar-center hidden lg:flex animate__animated animate__backInDown">
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
          <div className="flex flex-row items-center gap-2">
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-14 h-14 rounded-full"
            />
            <Link  onClick={handleLogOut} className="btn btn-primary">LogOut</Link>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
         {/* {user? (
          <div>
            <img src={user.photoURL} alt="" />
            <button onClick={handleLogOut}>logout</button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn mr-4 btn-primary">Login</button>
          </NavLink>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
