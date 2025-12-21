import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import EventCard from './EventCard';

const Events = () => {
    const axiosSecure = useAxiosSecure();
    const { data: events = [] } = useQuery({
        queryKey: ['eventss'],
        queryFn: async () => {
            const res = await axiosSecure.get('/events/approved');
           
            return res.data;
            
        }
        
    });
     
console.log(events);

    return (
        <div className=''>
            <h1 className='text-4xl font-bold text-center my-8 text-blue-500'>Our Latest Events</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>

                {
                    events.map(event => <EventCard key={event._id} event={event}></EventCard>)
                }

            </div>
        </div>
    );
};

export default Events;