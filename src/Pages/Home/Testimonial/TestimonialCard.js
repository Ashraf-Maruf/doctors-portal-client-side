import React from 'react';
import People1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg';
import TestimonialCards from './TestimonialCards';
const TestimonialCard = () => {

    const testimonialCardData = [
        {
            id: 1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            reviewUser:
            {
                img: People1,
                name: "Winson Herry",
                address: "California"
            }
        },
        {
            id: 2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            reviewUser:
            {
                img: people2,
                name: "Winson Herry",
                address: "California"
            }
        },
        {
            id: 3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            reviewUser:
            {
                img: people3,
                name: "Winson Herry",
                address: "California"
            }

        }
    ]

    return (
        <section className=' my-20'>
            <div className='  pb-20 flex justify-between items-center'>
                <div>
                    <h5 className='mb-2 font-bold text-secondary uppercase'>Testimonial</h5>
                    <h4>What Our Patients Says</h4>
                </div>
                <figure>
                    <img className='w-[192px] h-[156px]' src={quote} alt='' />
                </figure>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testimonialCardData.map(testimonial => <TestimonialCards

                        key={testimonial.id}
                        testimonial={testimonial}

                    ></TestimonialCards>)
                }
            </div>
        </section>
    );
};

export default TestimonialCard;