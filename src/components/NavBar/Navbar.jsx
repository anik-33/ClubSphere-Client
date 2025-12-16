import useAuth from '@/Hooks/useAuth';
import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error)
      })
  }

  const links = <>
    <li><NavLink to="/clubs">Clubs</NavLink></li>
    <li><NavLink to="/events">Events</NavLink></li>
    <li><NavLink to="/clubs/create">Create Club</NavLink></li>


  </>

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <span className="btn btn-ghost text-xl">
          ClubSphere
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div className="dropdown dropdown-bottom dropdown-end">
              {/* Trigger: user avatar */}
              <div tabIndex={0} className="avatar cursor-pointer">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  className="rounded-full border-2 h-12 w-12"
                  alt={user.displayName || "User"}
                />
              </div>

              {/* Dropdown content */}
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-white  shadow-lg p-2 mt-2"
              >
                <li className='ml-2 text-lg font-bold'>
                  {user.displayName}
                </li>
                <Link to={'/dashbord'} className='ml-2 text-sm font-bold'>
                  DashBord
                </Link>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 ">
            <Link to="/auth/login" className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
              Log in
            </Link>

          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;