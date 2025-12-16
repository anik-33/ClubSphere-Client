import ClubCard from '@/components/ClubCard/ClubCard';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AboutClub from './AboutClub';

const Club = () => {

    const axiosSecure= useAxiosSecure();

    const {data: clubs = []} = useQuery({
        queryKey:['clubs'],
        queryFn:async() =>{
            const res = await axiosSecure.get('/clubs');
            return res.data;
        }
    }) 



    return (
        <div>
            <AboutClub></AboutClub>

            <h2 className="text-3xl font-bold mb-6 text-center">Total Clubs:{clubs.length}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    clubs.map(club => <ClubCard club={club} key={club._id}></ClubCard>)
                }
            </div>
            
        </div>
    );
};

export default Club;