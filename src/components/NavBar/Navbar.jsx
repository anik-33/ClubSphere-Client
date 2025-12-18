import useAuth from '@/Hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut().catch(console.log);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#513fc5] font-semibold border-b-2 border-[#513fc5]'
      : 'text-gray-700 hover:text-[#513fc5]';

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/clubs" className={navLinkClass}>
          Clubs
        </NavLink>
      </li>
      <li>
        <NavLink to="/events" className={navLinkClass}>
          Events
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed  top-0 left-0 w-full z-50">
      <div
        className={`navbar transition-all duration-300 ${scrolled
          ? 'bg-white/90 backdrop-blur shadow'
          : 'bg-transparent'
          }`}
      >
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="text-2xl font-bold text-[#513fc5]"
          >
            ClubSphere
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">
            {links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <img
                  src={user.photoURL || '/default-avatar.png'}
                  className="rounded-full h-11 w-11 border"
                  alt="user"
                />
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu mt-3 p-3 shadow bg-white rounded-box w-52"
              >
                <li className="font-semibold text-center">
                  {user.displayName}
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#3244bd] text-white border-none"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
