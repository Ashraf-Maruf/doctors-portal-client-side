import React from 'react';
import chair from '../../../assets/images/chair.png'
import bgchair from '../../../assets/images/bg.png';
import PrimaryButton from '../../../Component/PrimaryButton';
const Banner = () => {
    return (
        <section className='lg:h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center ' style={{
            background: `url(${bgchair})`
        }}>

            <div className=" hero-content flex-col lg:flex-row-reverse">
                <figure>
                    <img src={chair} className="rounded-lg shadow-2xl " alt='' />
                </figure>
                <div>
                    <h1 className="text-5xl font-bold leading-[65px]">Your New Smile Starts<br />Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>

        </section>
    );
};

export default Banner;