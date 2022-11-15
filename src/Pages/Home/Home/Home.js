import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCard from '../InfoCard/InfoCard';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServicesCard from '../Services/ServicesCard';
import TestimonialCard from '../Testimonial/TestimonialCard';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <ServicesCard></ServicesCard>
            <MakeAppointment></MakeAppointment>
            <TestimonialCard></TestimonialCard>
            <Contact></Contact>
        </div>
    );
};

export default Home;