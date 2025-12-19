import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { IoIosCreate } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { BiFolderPlus } from "react-icons/bi";
import { MdCreateNewFolder, MdEventAvailable } from "react-icons/md";
import { LuClub } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { FcHome } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const DashBord = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300 bg-gradient-to-br from-blue-50 to-blue-200">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                             <FaArrowRightArrowLeft />
                        </label>
                        <div className="px-4 text-2xl text-blue-800">ClubSphere Dashboard</div>
                    </nav>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow">
                            {/* List item */}
                            <li>
                                <NavLink to='/'>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                        {/* Home icon */}
                                        <IoHome />
                                        <span className="is-drawer-close:hidden">Homepage</span>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard'>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                        {/* Home icon */}
                                        <FcHome />
                                        <span className="is-drawer-close:hidden">Dashboard Home</span>
                                    </button>
                                </NavLink>
                            </li>


                            {/* List item for admin role */}
                            <li>
                                <NavLink to="users/management" >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="User Manage">
                                        {/*users icon */}
                                        <FaUsers />
                                        <span className="is-drawer-close:hidden">Manage Users</span>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="club/management" >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Clubs">
                                        {/*users icon */}
                                        <BiFolderPlus />
                                        <span className="is-drawer-close:hidden">Approve Clubs</span>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="club/approve-member" >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Clubs Member">
                                        {/*users icon */}
                                        <BiFolderPlus />
                                        <span className="is-drawer-close:hidden">Approve Clubs Member</span>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="registered-events/approve" >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Registered Events">
                                        {/*users icon */}
                                        <BiFolderPlus />
                                        <span className="is-drawer-close:hidden">Approve Registered Events</span>
                                    </button>
                                </NavLink>
                            </li>
                            {/* List item for manager role */}
                            <li>
                                <NavLink to="clubs/manage/create/newclub" >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Create Club">
                                        {/* Club Creeate icon */}
                                        <IoIosCreate />
                                        <span className="is-drawer-close:hidden">Create Club</span>
                                    </button>
                                </NavLink>
                            </li>
                            {/* List item for manager role */}
                            <li>
                                <NavLink to="clubs/manage" >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Create Events">
                                        {/* Club manage icon */}
                                        <MdCreateNewFolder />
                                        <span className="is-drawer-close:hidden">Create Events</span>
                                    </button>
                                </NavLink>
                            </li>

                            {/* List item for user role*/}
                            <NavLink to='user/myclub'>
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Clubs">
                                        {/* Users icon */}
                                        <LuClub />
                                        <span className="is-drawer-close:hidden">My Clubs</span>
                                    </button>
                                </li>
                            </NavLink>
                            <NavLink to='user/myevent'>
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Events">
                                        {/* Users icon */}
                                        <MdEventAvailable />
                                        <span className="is-drawer-close:hidden">My Events</span>
                                    </button>
                                </li>
                            </NavLink>


                            {/* List item for Profile */}
                         <NavLink to='my-profile'>
                               <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                    {/* Settings icon */}
                                 <ImProfile />
                                    <span className="is-drawer-close:hidden">Profile</span>
                                </button>
                            </li>
                         </NavLink>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashBord;