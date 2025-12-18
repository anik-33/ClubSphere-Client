import Loading from '@/components/loading/Loading';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router';

const UserEvent = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: events = [] } = useQuery({
        queryKey: ['events', user?.email],

        enabled: !!user?.email,
        queryFn: async () => {

            const res = await axiosSecure.get(`/events/${user?.email}/myevents`)
            return res.data;
        }
    });
    console.log(events);


    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl">Total Events: {events.length}</h1>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Status</th>
                            <th>Payment ID</th>
                            <th>Registered At</th>
                            <th>Click to View Event</th>
                            <th>userEmail</th>
                            <th>Click to View Club</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            events.map((event, index) =>(
                                <tr>
                                    <th>{index +1}</th>
                                <td>{event.status}</td>
                                    <td>{event.paymentId}</td>
                                    <td>{event.registeredAt}</td>
                                    <Link to={`/events/details/${event.eventId}`}>
                                    <td>{event.eventId}</td>
                                    </Link>
                                    <td>{event.userEmail}</td>
                                    <Link to={`/clubs/${event.clubId}`}>
                                    <td>{event.clubId}</td>
                                    </Link>
                                    
                                    
                                </tr>
                      )) }

                    </tbody>
                </table>
            </div>



        </div >
    );
};

export default UserEvent;