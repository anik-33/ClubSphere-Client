import React from 'react';
import Hero from './Hero';
import HowIt from './HowIt';
import Gallary from './Gallary';
import Partners from './Partners';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Gallary></Gallary>
            <HowIt></HowIt>
            
            <Partners></Partners>
        </div>
    );
};

export default Home;