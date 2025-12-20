import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaCalendarCheck } from "react-icons/fa";
import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";

const UserHome = () => {
    const { user,loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: club =[] } = useQuery({
        queryKey: ["club-member", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/clubs/${user?.email}/myclub`
            );
            return res.data;
        },
    });
    const { data: event =[] } = useQuery({
        queryKey: ["event-member", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/events/${user?.email}/myevents`
            );
            return res.data;
        },
    });

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="p-6">
            {/* Welcome */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Welcome, {user?.displayName || "Member"} 👋
                </h2>
                <p className="text-gray-500 mt-1">
                    Here’s a quick overview of your activity
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">

                {/* Clubs Joined */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Clubs Joined
                            </p>
                            <h3 className="text-3xl font-bold text-gray-800">
                                {club.length || 0}
                            </h3>
                        </div>
                        <FaUsers className="text-4xl text-blue-500" />
                    </div>
                </div>

                {/* Events Registered */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Events Registered
                            </p>
                            <h3 className="text-3xl font-bold text-gray-800">
                                {event.length || 0}
                            </h3>
                        </div>
                        <FaCalendarCheck className="text-4xl text-blue-500" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserHome;
