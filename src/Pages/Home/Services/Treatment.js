import React from 'react';
import TreatmentImg from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Component/PrimaryButton';
const Treatment = () => {
    return (
        <div className="hero  pb-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={TreatmentImg} className=" lg:max-w-lg  rounded-lg shadow-2xl" />
                <div className=' lg:ml-24'>
                    <h1 className="text-5xl font-bold leading-[55px]">Exceptional Dental <br/>Care, on Your Terms</h1>
                    <p className="py-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;