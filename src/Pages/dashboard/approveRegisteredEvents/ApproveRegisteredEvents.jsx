import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ApproveRegisteredEvents = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: events = [] } = useQuery({
        queryKey: ['registrations'],
        queryFn: async () => {

            const res = await axiosSecure.get('/event/registrations');
            return res.data;
        }
    });

        const handleApprove = (event) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Approve it!"
            }).then((result) => {
                if (result.isConfirmed) {
    
                axiosSecure.patch(`/event/registered/${event._id}/status`, { status: 'approved' });
                    Swal.fire({
                        title: "Approved!",
                        text: "You approved this Registration request.",
                        icon: "success"
                    });
                    refetch();
                }
            });
        }
        const handleReject = (event) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Reject it!"
            }).then((result) => {
                if (result.isConfirmed) {

                axiosSecure.patch(`/event/registered/${event._id}/status`, { status: 'rejected' });
                    Swal.fire({
                        title: "Rejected!",
                        text: "You rejected this Registration request.",
                        icon: "success"
                    });
                    refetch();
                }
            });
        }
        

    return (
         <div>
            <h1>Total Club:{events.length}</h1>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-base-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User Email</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">RegisteredAt</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment ID</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Event ID</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {events.map((event, index) => (
                            <tr key={event._id} className="hover:bg-base-100 transition">
                                <td className="px-4 py-3 font-semibold text-gray-700">{index + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold text-lg text-primary">{event.userEmail}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{event.registeredAt}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold 
                                    ${event.status === 'approved' ? 'bg-green-100 text-green-700' : ''}
                                    ${event.status === 'pending' ? 'bg-green-100 text-yellow-500' : ''}
                                    ${event.status === 'rejected' ? 'bg-red-100 text-red-700' : ''}`}>
                                        {event.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                        {event.paymentId}
                                    </span>
                                </td>
                             <Link to={`/events/details/${event.eventId}`}>
                                <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                        {event.eventId}
                                    </span>
                                </td>
                             </Link>
                                <td className="px-4 py-3 text-center">

                                    <button
                                        onClick={() => handleApprove(event)}
                                        className="btn bg-green-400 text-white btn-outline mr-1">
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleReject(event)}
                                        className="btn bg-red-300 btn-outline">
                                        Reject
                                    </button>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRegisteredEvents;