import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const Contact = () => {
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        console.log(email,subject,message)

        const contact = {
            userEmail: email,
            userSubject: subject,
            userMessage: message,
        }


        fetch('https://doctors-portal-server-nine-alpha.vercel.app/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your booking done')  
                    form.reset()                
                }
                else{
                    alert('You already have a booking on')
                }
            })
        // console.log(booking)        
    }
    return (
        <section className=' py-16' style={{
            background: `url(${appointment})`
        }}>

            <div className='text-center  mb-10'>
                <h5 className=' text-lg font-bold text-secondary'>Contact Us</h5>
                <h4 className=' text-white text-3xl xl:text-4xl font-normal'>Stay connected with us</h4>
            </div>
            <div className=' flex justify-center items-center'>
                <form onSubmit={handleBooking} className=' grid grid-flow-row gap-5'>
                    <input type="text" name="email" placeholder="Email Address" className="input input-bordered  w-96 max-w-xs" />
                    <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-96 max-w-xs" />
                    <textarea name="message" className="textarea" placeholder="Your message"></textarea>
                    <div className=' flex justify-center  mt-4'>
                        <input type="submit" value='Submit' className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;