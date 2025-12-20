import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUsers, FaCalendarAlt, FaMoneyBillWave, FaLayerGroup } from "react-icons/fa";

const ManagerHome = () => {
    const axiosSecure = useAxiosSecure();
    const {  user } = useAuth();

       const { data: clubs = [] } = useQuery({
        queryKey: ['clubs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/clubs/${user?.email}/manager`);
            return res.data;
        }
    });


        const { data: events = [] } = useQuery({
            queryKey: ['events', user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/events/${user?.email}/manager`);
                return res.data;
            }
        });

    return (
        <div className="p-6">
            {/* Page Title */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Manager Dashboard
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Clubs */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Managed Clubs</p>
                            <h3 className="text-3xl font-bold text-gray-800">{clubs.length || 0}</h3>
                        </div>
                        <FaLayerGroup className="text-4xl text-blue-500" />
                    </div>
                </div>

                {/* Members */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Members</p>
                            <h3 className="text-3xl font-bold text-gray-800">Not Implemented</h3>
                        </div>
                        <FaUsers className="text-4xl text-blue-500" />
                    </div>
                </div>

                {/* Events */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Events</p>
                            <h3 className="text-3xl font-bold text-gray-800">{events.length}</h3>
                        </div>
                        <FaCalendarAlt className="text-4xl text-blue-500" />
                    </div>
                </div>

                {/* Payments */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Payments</p>
                            <h3 className="text-3xl font-bold text-gray-800">Not implemented</h3>
                        </div>
                        <FaMoneyBillWave className="text-4xl text-blue-500" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManagerHome;
