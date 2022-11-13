import React from 'react';
import chair from '../../../assets/images/chair.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-back flex items-center ">
            <div className="flex justify-between flex-row-reverse items-center">
                <img src={chair} className="rounded-lg shadow-2xl w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold leading-[65px]">Your New Smile Starts<br/>Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;