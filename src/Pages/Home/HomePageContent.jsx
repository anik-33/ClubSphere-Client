import React from 'react';
import Hero from './Hero';
import HowIt from './HowIt';
import Gallary from './Gallary';
import Partners from './Partners';
import HeroSection from './HeroSection';
import WhyChoose from './WhyChoose';
import FAQ from './Faq';

const Home = () => {
    return (
        <div>
            {/* <Hero></Hero> */}
            <HeroSection></HeroSection>

            <Gallary></Gallary>
            <HowIt></HowIt>
            
            <Partners></Partners>
            <WhyChoose></WhyChoose>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;