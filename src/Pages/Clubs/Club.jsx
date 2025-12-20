import ClubCard from '@/components/ClubCard/ClubCard';
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '@/Hooks/useAuth';
import Loading from '@/components/loading/Loading';
import Hero from '../Home/Hero';

const Club = () => {

    const axiosSecure= useAxiosSecure();
    const {loading}= useAuth();

    

    const {data: clubs = []} = useQuery({
        queryKey:['clubs'],
        queryFn:async() =>{
            const res = await axiosSecure.get('approved/clubs');
            return res.data;
        }
    }) 
    console.log(clubs);

if (loading){
    return <Loading></Loading>
}

    return (
        <div className=''>
            <Hero></Hero>

            <h2 className="text-3xl font-bold mb-6 text-center mt-4">Explore our Clubs</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    clubs.map(club => <ClubCard club={club} key={club._id}></ClubCard>)
                }
            </div>
            
        </div>
    );
};

export default Club;