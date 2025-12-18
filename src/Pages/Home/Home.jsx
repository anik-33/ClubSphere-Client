import React from 'react';
import Hero from './Hero';
import HowIt from './HowIt';
import Gallary from './Gallary';
import Partners from './Partners';
import HeroSection from './HeroSection';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            {/* <Hero></Hero> */}
            <HeroSection></HeroSection>

            <Gallary></Gallary>
            <HowIt></HowIt>
            
            <Partners></Partners>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;