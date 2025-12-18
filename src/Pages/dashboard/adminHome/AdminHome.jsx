import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdminHome = () => {

    const axiosSecure = useAxiosSecure();

    const {  data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    })
    

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Welcome to Dashboard Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2 text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87V4a4 4 0 10-8 0v16m8 0a4 4 0 008 0V4a4 4 0 10-8 0v16z" /></svg>
                    </span>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">Total Users</h3>
                    <p className="text-3xl font-bold text-blue-800">{users.length}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-300 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2 text-purple-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87V4a4 4 0 10-8 0v16m8 0a4 4 0 008 0V4a4 4 0 10-8 0v16z" /></svg>
                    </span>
                    <h3 className="text-xl font-semibold text-purple-900 mb-1">Total Clubs</h3>
                    <p className="text-3xl font-bold text-purple-800">--</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-300 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2 text-pink-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V6a2 2 0 012-2h12a2 2 0 012 2v8c0 2.21-3.582 4-8 4z" /></svg>
                    </span>
                    <h3 className="text-xl font-semibold text-pink-900 mb-1">Total Events</h3>
                    <p className="text-3xl font-bold text-pink-800">--</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;