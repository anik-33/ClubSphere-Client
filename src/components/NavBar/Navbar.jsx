import useAuth from '@/Hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { MdLogin } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition ${
      isActive
        ? 'text-[#513fc5] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#513fc5]'
        : 'text-gray-700 hover:text-[#513fc5]'
    }`;

  return (
    <header
      className={`sticky top-0 left-0   w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className=" px-5">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600
                       bg-clip-text text-transparent drop-shadow"
          >
            ClubSphere
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/clubs" className={navLinkClass}>Clubs</NavLink>
            <NavLink to="/events" className={navLinkClass}>Events</NavLink>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative group">
                <img
                  src={user.photoURL || '/default-avatar.png'}
                  alt="user"
                  className="h-10 w-10 rounded-full border cursor-pointer"
                />

                {/* Dropdown */}
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg
                                opacity-0 scale-95 invisible
                                group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                                transition-all duration-200 p-3">
                  <p className="text-center font-semibold mb-2">
                    {user.displayName}
                  </p>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logOut}
                    className="w-full text-left px-3 py-2 rounded hover:bg-red-50 text-red-600"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2
                           rounded-full hover:bg-blue-700 transition"
              >
                <MdLogin />
                Login
              </Link>
            )}

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-gray-700"></span>
              <span className="w-6 h-[2px] bg-gray-700"></span>
              <span className="w-6 h-[2px] bg-gray-700"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white rounded-xl shadow-lg mt-3 p-5 space-y-4">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/clubs" className={navLinkClass}>
              Clubs
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/events" className={navLinkClass}>
              Events
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
