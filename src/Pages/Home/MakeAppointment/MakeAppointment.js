import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Component/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className=' xl:mt-36' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content pb-0 flex-col md:flex-col-reverse lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg " alt='' />
                    <div className=' xl:py-0 py-10'>
                        <h4 className=' text-secondary font-bold mb-5'>Appointment</h4>
                        <h1 className=" text-3xl xl:text-4xl font-semibold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;