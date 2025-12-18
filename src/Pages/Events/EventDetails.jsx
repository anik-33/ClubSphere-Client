import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { FaMapMarkerAlt, FaCalendarAlt, FaTag, FaMoneyBillWave } from 'react-icons/fa';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import useAuth from '@/Hooks/useAuth';
import Loading from '@/components/loading/Loading';
import Swal from 'sweetalert2';


const EventDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const Location = useLocation();

  const { data: event = {}, isLoading } = useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/events/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    clubId,
    title,
    description,
    location,
    isPaid,
    bannerImage,
    eventFee,
    category,
    eventDate,
    createdAt,
    status,
  } = event;

  const handleBookEvent = (id) => {
    if (!user) {
      navigate('/login', {
        state: { from: Location }
      });
      return;
    }

    const eventInfo ={
        registeredAt:new Date(),
        paymentId :'null',
        status :'pending',
        clubId : clubId,
        userEmail:user.email,
        eventId: id

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
    
                    axiosSecure.post('/event/registrations', eventInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                console.log('Event created successfully');
                                Swal.fire({
                                    title: "Booked!",
                                    text: "Event Booked Succesfully!.",
                                    icon: "success"
    
                                });
                               
                            }
    
                        })
    
    
                }
            });
    
  };

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Banner */}
      <div className="relative h-[420px]">
        <img
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-6 text-white max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            <p className="flex items-center gap-2 mt-2 text-sm">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              About This Event
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaTag className="text-blue-600" />
              <span className="font-medium text-gray-700">
                Category: {category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-blue-600" />
              <span className="font-medium text-gray-700">
                Event Date: {new Date(eventDate).toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaMoneyBillWave className="text-blue-600" />
              <span className="font-medium text-gray-700">
                {isPaid ? `Fee: ৳${eventFee}` : 'Free Event'}
              </span>
            </div>

            <div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {status}
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Created At: {new Date(createdAt).toLocaleDateString()}
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-xl p-6 shadow h-fit sticky top-28">
          <h3 className="text-lg font-semibold mb-4">Attend This Event</h3>

          <p className="text-gray-600 mb-4">
            Join <strong>{title}</strong> and be part of an amazing experience.
          </p>

          <button
            onClick={()=> handleBookEvent(_id)}
            className="w-full py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
          >
            {isPaid ? 'Book Now' : 'Register Free'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
