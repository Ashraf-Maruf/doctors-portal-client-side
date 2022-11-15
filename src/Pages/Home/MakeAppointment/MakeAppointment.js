import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Component/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className=' mt-36' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content pb-0 flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg " alt='' />
                    <div>
                        <h1 className="text-lg text-primary font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;