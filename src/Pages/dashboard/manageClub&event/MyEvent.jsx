import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router';

const MyEvent = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: events = [] } = useQuery({
        queryKey: ['events', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/events/${user?.email}/manager`);
            return res.data;
        }
    });
    console.log(events);


    return (
        <div>
            <div className='flex flex-col gap-3 mb-4 p-3'>
                <h1 className='text-gray-900 text-2xl'>Total Club Incharge:{events.length}</h1>
                
            </div>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-base-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Event Name</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Event Fee</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">View Details</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {events.map((event, index) => (
                            <tr key={event._id} className="hover:bg-base-100 transition">
                                <td className="px-4 py-3 font-semibold text-gray-700">{index + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="flex flex-col  gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={event.bannerImage}
                                                    alt={event.title || "User"}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-primary">{event.title}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{event.eventFee}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${event.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-red-700'}`}>
                                        {event.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                        {event.category}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">

                                    <Link to={`/events/details/${event._id}`} className='btn'>View Event</Link>
                                </td>
                                <td className="px-4 py-3 text-center">
                                <Link to={`event-update/${event._id}`} className='btn'>Update</Link>
                                

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEvent;