import Loading from '@/components/loading/Loading';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router';

const UserClub = () => {
    const axiosSecure = useAxiosSecure();
    const { loading, user } = useAuth();

    const { data: clubs = [] } = useQuery({
        queryKey: ['clubs', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/clubs/${user?.email}/myclub`);
            return res.data;
        }
    })

    console.log(clubs);


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='flex justify-between items-center mb-4 p-3'>
                <h1 className='text-gray-900 text-2xl'>My Total Club:{clubs.length}</h1>

            </div>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-base-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Club ID</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">JoinedAt</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>

                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {clubs.map((club, index) => (
                            <tr key={club._id} className="hover:bg-base-100 transition">
                                <td className="px-4 py-3 font-semibold text-gray-700">{index + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold text-lg text-primary">{club.clubId}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className='px-4 py-3'>
                             <span className={`px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700`}>
                                        {club.useremail}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{club.joinedAt}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${club.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-red-700'}`}>
                                        {club.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                        <button
                                            className="btn bg-blue-500 text-white"
                                        >
                                            Dellete / Leave
                                        </button>
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserClub;