import React from 'react';

const TestimonialCards = ({ testimonial }) => {
    const { description, reviewUser, } = testimonial;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className=' mt-9 flex items-center'>
                    <div className="avatar">
                        <div className=" w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={reviewUser.img} alt='' />
                        </div>
                    </div>

                    <div className=' pl-3'>
                        <h1 className=' text-accent font-semibold'>{reviewUser.name}</h1>
                        <p>{reviewUser.address}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestimonialCards;