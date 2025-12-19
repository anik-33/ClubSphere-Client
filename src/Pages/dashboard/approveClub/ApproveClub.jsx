import Loading from '@/components/loading/Loading';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ApproveClub = () => {
    const axiosSecure= useAxiosSecure();
const {loading}= useAuth();

        const {refetch,data: clubs = []} = useQuery({
            queryKey:['clubs'],
            queryFn:async() =>{
                const res = await axiosSecure.get("/clubs");
                return res.data;
            }
        }) 

       const handleApprove=(club)=>{
        console.log("Approve club with ID:",club);
        const updateStatus={status:'approved'}
        axiosSecure.patch(`clubs/${club._id}/status`,updateStatus)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch();
                  Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Club Approved Succesfully.`,
                        showConfirmButton: false,
                        timer: 2000
                    });
            }
        })
       }

       const handleReject=(club)=>{
        console.log("Reject club with ID:",club);
          const updateStatus={status:'Rejected'}
        axiosSecure.patch(`clubs/${club._id}/status`,updateStatus)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch();
                  Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Club Rejected Succesfully.`,
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
            <h1>Total Club:{clubs.length}</h1>
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
                                                <span className={`px-2 py-1 rounded text-xs font-semibold ${club.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-blue-700'}
                                                
                                                ${club.status === 'Rejected' ? 'bg-red-100 text-red-700':''}`}>
                                                    {club.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <span className={`px-2 py-1 rounded text-xs font-semibold`}>
                                                    {club.category}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                
                                                 <button
                                                 onClick={()=>handleApprove(club)}
                                                 className="btn bg-green-400 btn-outline mr-1">
                                                    Approve
                                                </button>
                                                 <button
                                                 onClick={()=>handleReject(club)}
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

export default ApproveClub;