import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManage = () => {


    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState('');

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    })
    // console.log(users);

    const handleMakeManager = user => {
        const roleInfo = { role: 'manager' }


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Marked this person as manager!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: "Success!",
                                text: "User has been marked as manager.",
                                icon: "success"
                            });

                        }
                    })


            }
        });




    }

    const handleRemoveManager = user => {
        const roleInfo = { role: 'user' }
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove this person as manager!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: "Success!",
                                text: "User has been removed as manager to user.",
                                icon: "success"
                            });

                        }
                    })


            }
        });

    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-1">User Management</h2>
                    <p className="text-gray-500 text-md">Total Users: <span className="font-semibold text-secondary">{users.length}</span></p>
                </div>
                <div className="relative w-full md:w-80">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="search"
                        className="input input-bordered w-full pl-10"
                        placeholder="Search users..."
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-base-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Admin Action</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-base-100 transition">
                                <td className="px-4 py-3 font-semibold text-gray-700">{index + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                    alt={user.displayName || "User"}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-primary">{user.displayName}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{user.email}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${user.role === 'manager' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    {user.role === 'manager' ? (
                                        <button
                                            onClick={() => handleRemoveManager(user)}
                                            className="btn btn-sm bg-red-100 hover:bg-red-200 text-red-600 border-none shadow-none"
                                            title="Remove Manager"
                                        >
                                            <FiShieldOff size={18} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeManager(user)}
                                            className="btn btn-sm bg-green-100 hover:bg-green-200 text-green-700 border-none shadow-none"
                                            title="Make Manager"
                                        >
                                            <FaUserShield size={18} />
                                        </button>
                                    )}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <button className="btn btn-xs btn-outline">{user.createdAt}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManage;