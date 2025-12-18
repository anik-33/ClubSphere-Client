import Loading from '@/components/loading/Loading';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router';

const MyClub = () => {
    const axiosSecure = useAxiosSecure();
    const { loading, user } = useAuth();

    const { data: clubs = [] } = useQuery({
        queryKey: ['clubs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/clubs/${user?.email}/manager`);
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
                <h1 className='text-gray-900 text-2xl'>Total Club Incharge:{clubs.length}</h1>
                <div>
                    <Link to='create/newclub'>
                        <button className='btn bg-blue-300 text-white'>Create Club</button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-base-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Club Name</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">CreatedAt</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {clubs.map((club, index) => (
                            <tr key={club._id} className="hover:bg-base-100 transition">
                                <td className="px-4 py-3 font-semibold text-gray-700">{index + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={club.bannerImage}
                                                    alt={club.clubName || "User"}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-primary">{club.clubName}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{club.createdAt}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${club.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-red-700'}`}>
                                        {club.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                        {club.category}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    {
                                        club.status === 'approved' ? (
                                            <Link to={`create/newevent/${club._id}`}>
                                                <button className="btn text-white bg-blue-500 btn-outline">
                                                    Create Event
                                                </button>
                                            </Link>
                                        ) :
                                            (
                                                <button
                                                    className="btn btn-disabled cursor-not-allowed opacity-60"
                                                    disabled
                                                    title="Club must be approved to create event"
                                                >
                                                    Create Event
                                                </button>
                                            )


                                    }

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClub;