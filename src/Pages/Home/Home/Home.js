import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCard from '../InfoCard/InfoCard';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServicesCard from '../Services/ServicesCard';
import TestimonialCard from '../Testimonial/TestimonialCard';

const Home = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <Banner></Banner>
                <InfoCard></InfoCard>
                <ServicesCard></ServicesCard>
                <MakeAppointment></MakeAppointment>
                <TestimonialCard></TestimonialCard>                
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;