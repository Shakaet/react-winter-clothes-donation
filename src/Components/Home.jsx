import React from 'react';
import Banner from './Banner';
import About from './About';
import HowItWorks from './HowItWorks';
import ImpactStories from './ImpactStories';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <About></About>
             <HowItWorks></HowItWorks>
             <ImpactStories></ImpactStories>
              
        </div>
    );
};

export default Home;