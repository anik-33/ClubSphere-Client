import Loading from '@/components/loading/Loading';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ApproveEvent = () => {
    const axiosSecure= useAxiosSecure();
const {loading}= useAuth();

        const {refetch,data: events = []} = useQuery({
            queryKey:['events'],
            queryFn:async() =>{
                const res = await axiosSecure.get("/events/pending");
                return res.data;
            }
        }) 

       const handleApprove=(event)=>{
        console.log("Approve event with ID:",event);
        const updateStatus={status:'approved'}
        axiosSecure.patch(`events/${event._id}/status`,updateStatus)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch();
                  Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Event Approved Succesfully.`,
                        showConfirmButton: false,
                        timer: 2000
                    });
            }
        })
       }

       const handleReject=(event)=>{
        console.log("Reject event with ID:",event);
          const updateStatus={status:'Rejected'}
        axiosSecure.patch(`events/${event._id}/status`,updateStatus)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch();
                  Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Event Rejected Succesfully.`,
                        showConfirmButton: false,
                        timer: 2000
                    });
            }
        })
       }


        if(loading){
            return <Loading></Loading>
        }

    return (
        <div>
            <h1>Total Club:{events.length}</h1>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-base-200">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Event Name</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">CreatedAt</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {events.map((event, index) => (
                                        <tr key={event._id} className="hover:bg-base-100 transition">
                                            <td className="px-4 py-3 font-semibold text-gray-700">{index + 1}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={event.bannerImage}
                                                                alt={event.clubName || "User"}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-lg text-primary">{event.title}</div>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-gray-700">{event.createdAt}</td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 rounded text-xs font-semibold ${event.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-blue-700'}
                                                
                                                ${event.status === 'Rejected' ? 'bg-red-100 text-red-700':''}`}>
                                                    {event.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                                    {event.category}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                
                                                 <button
                                                 onClick={()=>handleApprove(event)}
                                                 className="btn bg-green-400 btn-outline mr-1">
                                                    Approve
                                                </button>
                                                 <button
                                                 onClick={()=>handleReject(event)}
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

export default ApproveEvent;