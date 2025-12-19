import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ApproveClubMember = () => {

    const axiosSecure = useAxiosSecure();


    const { refetch, data: clubs = [] } = useQuery({
        queryKey: ['clubs'],
        queryFn: async () => {
            const res = await axiosSecure.get("/booking/clubs");
            return res.data;
        }
    })

    const handleApprove = (club) => {
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

            axiosSecure.patch(`/club-member/${club._id}/status`, { status: 'approved' });
                Swal.fire({
                    title: "Approved!",
                    text: "You approved this member request.",
                    icon: "success"
                });
                refetch();
            }
        });
    }
    
    const handleReject = (club) => {
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

            axiosSecure.patch(`/club-member/${club._id}/status`, { status: 'rejected' });
                Swal.fire({
                    title: "Rejected!",
                    text: "You rejected this member request.",
                    icon: "success"
                });
                refetch();
            }
        });
    }

    return (
        <div>
            <h1>Total Club:{clubs.length}</h1>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-base-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User Email</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Club ID</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">JoinedAt</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment ID</th>
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
                                            <div className="font-bold text-lg text-primary">{club.useremail}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{club.clubId}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold 
                                    ${club.status === 'approved' ? 'bg-green-100 text-green-700' : ''}
                                    ${club.status === 'pending' ? 'bg-green-100 text-yellow-500' : ''}
                                    ${club.status === 'rejected' ? 'bg-red-100 text-red-700' : ''}`}>
                                        {club.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                        {club.joinedAt}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                        {club.paymentId}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">

                                    <button
                                        onClick={() => handleApprove(club)}
                                        className="btn bg-green-400 btn-outline mr-1">
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleReject(club)}
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

export default ApproveClubMember;