import useAuth from '@/Hooks/useAuth';
import UseRole from '@/Hooks/UseRole';
import React from 'react';

const MyProfile = () => {
    const { user } = useAuth();
    const {role}= UseRole();
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Cover Photo / Header Gradient */}
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600">
                    <h1 className="text-white text-center  text-2xl font-bold p-4">ClubSphere Profile</h1>
                </div>

                {/* Profile Section */}
                <div className="relative px-6 pb-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:space-x-5">
                        <div className="relative">
                            <img
                                className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
                                src={user?.photoURL || "https://via.placeholder.com/150"}
                                alt="Profile"
                            />
                        </div>
                        <div className="mt-6 sm:mt-0 text-center sm:text-left flex-1">
                            <h1 className="text-3xl font-bold text-gray-800">
                                {user?.displayName || "Anonymous User"}
                            </h1>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Account Information</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Full Name</span>
                                    <span className="font-medium text-gray-800">{user?.displayName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Email Address</span>
                                    <span className="font-medium text-gray-800">{user?.email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Account Role</span>
                                    <span className="font-mono  text-blue-500">{role || 'N/A'}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Stats</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl text-center">
                                    <span className="block text-2xl font-bold text-blue-600">12</span>
                                    <span className="text-xs text-blue-400 uppercase tracking-wider">Posts</span>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl text-center">
                                    <span className="block text-2xl font-bold text-purple-600">450</span>
                                    <span className="text-xs text-purple-400 uppercase tracking-wider">Followers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;