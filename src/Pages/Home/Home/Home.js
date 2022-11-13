import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import ServicesCard from '../Services/ServicesCard';

const Home = () => {
    return (
        <div className='mx-5 '>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <ServicesCard></ServicesCard>
        </div>
    );
};

export default Home;