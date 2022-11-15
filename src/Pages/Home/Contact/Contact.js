import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Component/PrimaryButton';
const Contact = () => {
    return (
        <section className=' py-16' style={{
            background: `url(${appointment})`
        }}>

            <div className='text-center  mb-10'>
                <h5 className=' text-lg font-bold text-secondary'>Our Services</h5>
                <h4 className=' text-white text-xl font-normal'>Services We Provide</h4>
            </div>
            <div className=' flex justify-center items-center'>
                <form className=' grid grid-flow-row gap-5'>
                    <input type="text" placeholder="Type here" className="input input-bordered  w-96 max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-96 max-w-xs" />
                    <textarea className="textarea" placeholder="Bio"></textarea>
                    <div className=' flex justify-center  mt-4'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;