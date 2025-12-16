import React from 'react';

const HowIt = () => {
    return (
        <section className="how-it-works max-w-full mx-auto my-12 p-6 bg-base-100 rounded shadow">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <span className="text-5xl mb-4 text-secondary">🔍</span>
                    <h3 className="text-xl font-semibold mb-2">Explore Clubs & Events</h3>
                    <p className="text-gray-600">Browse a wide variety of clubs and events that match your interests and passions.</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl mb-4 text-secondary">🤝</span>
                    <h3 className="text-xl font-semibold mb-2">Join or Create</h3>
                    <p className="text-gray-600">Become a member of your favorite club or start your own to build a community.</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl mb-4 text-secondary">🎉</span>
                    <h3 className="text-xl font-semibold mb-2">Participate & Enjoy</h3>
                    <p className="text-gray-600">Attend events, connect with members, and make the most of your club experience!</p>
                </div>
            </div>
        </section>
    );
};

export default HowIt;