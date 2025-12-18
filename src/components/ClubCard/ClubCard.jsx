import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const ClubCard = ({club}) => {
    console.log(club);
    const {_id,clubName, location, bannerImage, membershipFee, category} = club;

    return (
           <div className="card bg-white shadow-lg hover:shadow-2xl transition duration-300">
      
      {/* Banner */}
      <figure className="h-48 overflow-hidden">
        <img
          src={bannerImage}
          alt={clubName}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </figure>

      <div className="card-body">
        {/* Category */}
        <span className="badge badge-primary badge-outline w-fit mb-2">
          {category}
        </span>

        {/* Club Name */}
        <h2 className="card-title text-xl font-bold">
          {clubName}
        </h2>

        {/* Location */}
        <p className="flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt className="text-primary" />
          {location}
        </p>

        {/* Membership Fee */}
        <div className="mt-4 flex justify-between items-center">
          <span className="font-semibold text-primary">
            {membershipFee > 0 ? `৳${membershipFee}` : "Free Membership"}
          </span>

          <Link to={`/clubs/${_id}`}>
            <button className="btn w-full btn-sm btn-outline btn-primary">
              View Club
            </button>
          </Link>
          
        </div>
      </div>
    </div>
    );
};

export default ClubCard;