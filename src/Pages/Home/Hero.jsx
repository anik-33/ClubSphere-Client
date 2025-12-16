import React from 'react';

const Hero = () => {
    return (
        <section className="hero min-h-[60vh] bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center px-4 py-12 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                    Welcome to ClubSphere
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Discover, join, and create amazing clubs and events. Connect with like-minded people, explore your passions, and never miss out on the next big thing happening around you!
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="/clubs" className="btn btn-primary px-6 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 transition">Explore Clubs</a>
                    <a href="/events" className="btn btn-outline px-6 py-2 rounded border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">View Events</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;