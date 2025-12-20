import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import EventCard from './EventCard';

const Events = () => {
    const axiosSecure = useAxiosSecure();
    const {data : events = []} = useQuery({
        queryKey: ['events'],
        queryFn: async () => {  
            const res = await axiosSecure.get('/events/approved');
            return res.data;
        }
    });


    return (
        <div className='mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
           
        {
            events.map(event =>  <EventCard key={event._id} event={event}></EventCard>)
        }

        </div>
    );
};

export default Events;