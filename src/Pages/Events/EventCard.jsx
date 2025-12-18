import React from 'react';
import { FaMapMarkerAlt, FaTag, FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router';

const EventCard = ({ event }) => {
    const {_id, title, location, eventFee, createdAt, category, bannerImage, } = event;

    return (
        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">

            {/* Banner Image */}
            <figure className="h-48 overflow-hidden">
                <img
                    src={bannerImage}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
            </figure>

            <div className="card-body">
                {/* Category */}
                <div className="flex justify-between items-center mb-2">
                    <span className="badge badge-primary badge-outline">
                        <FaTag className="mr-1" /> {category}
                    </span>

                    <span className="text-sm text-gray-500 flex items-center gap-1">
                        <FaCalendarAlt /> {new Date(createdAt).toLocaleDateString()}
                    </span>
                </div>

                {/* Title */}
                <h2 className="card-title text-lg font-bold line-clamp-2">
                    {title}
                </h2>

                {/* Location */}
                <p className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-primary" />
                    {location}
                </p>

                {/* Fee */}
                <div className="mt-3 flex justify-between items-center">
                    <span className="font-semibold text-primary">
                        {eventFee > 0 ? `$${eventFee}` : "Free Event"}
                    </span>

                    <Link to={`/events/details/${_id}`}>
                    <button className="btn btn-sm btn-outline btn-primary">
                        View Details
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;