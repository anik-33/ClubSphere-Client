import Loading from '@/components/loading/Loading';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { FaMapMarkerAlt, FaUsers, FaTag } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ClubDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const {user, loading } = useAuth();
  const navigate = useNavigate();
const Location = useLocation();


  const { data: club = {}, isLoading } = useQuery({
    queryKey: ['club', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/clubs/${id}`);
      return res.data;
    },
  });

  const {
    bannerImage,
    category,
    clubName,
    createdAt,
    description,
    location,
    membershipFee,
    status,
  } = club;


const handleJoinClub = (id) => {
  if (!user) {
    navigate('/login', {
      state: { from: Location }
    });
    return;
  }

const userInfo ={
  useremail: user.email,
  clubId: id,
  status:'pending',
  paymentId:'null',
  joinedAt:new Date(),


}
  
          Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
  
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, "
          }).then((result) => {
              if (result.isConfirmed) {
  
                  axiosSecure.post('/booking/clubs', userInfo)
                      .then(res => {
                          if (res.data.insertedId) {
                              console.log('Join as club member successfully');
                              Swal.fire({
                                  title: "Joined!",
                                  text: "Joined Succesfully!.",
                                  icon: "success"
  
                              });
                              // navigate('/dashboard/myBookings');
                          }
  
                      })
  
  
              }
          });
  
};


  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Banner */}
      <div className="relative h-[400px]">
        <img
          src={bannerImage}
          alt={clubName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">{clubName}</h1>
            <p className="flex items-center gap-2 mt-2">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-full mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl text-blue-500 font-semibold mb-3">About this Club</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaTag className="text-primary" />
              <span className="text-gray-700 font-medium">
                Category: {category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaUsers className="text-primary" />
              <span className="text-gray-700 font-medium">
                Membership Fee: ৳{membershipFee}
              </span>
            </div>

            <div>
              <span className="text-gray-500">Created At:</span>{' '}
              {new Date(createdAt).toLocaleDateString()}
            </div>

            <div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl p-6 shadow h-fit">
          <h3 className="text-lg font-semibold mb-4">Join This Club</h3>

          <p className="text-gray-600 mb-4">
            Become a member of <strong>{clubName}</strong> and enjoy exclusive
            activities & community events.
          </p>

          <button
          onClick={()=>handleJoinClub(club._id)}
            className="w-full py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-primary/90 transition"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;
