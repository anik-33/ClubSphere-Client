import React from 'react';
import { Link } from 'react-router';

const ClubCard = ({club}) => {
    console.log(club);
    const {_id,clubName, location, bannerImage, membershipFee, category} = club;

    return (
        <div className="card bg-base-100 shadow-sm mb-6">
            <figure>
                <img className='h-48 w-full'
                    src={bannerImage}
                    alt={clubName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {clubName}
                    {/* <div className="badge ">NEW</div> */}
                </h2>
                <h2>{location}</h2>
                <div className="card-actions justify-between items-center">
                    <div className="badge badge-outline">${membershipFee}</div>
                    <div className="badge badge-outline">{category}</div>
                </div>
            </div>
            <Link to={`/clubs/${_id}`} className='btn bg-blue-800 text-white'>Details</Link>
            
        </div>
    );
};

export default ClubCard;