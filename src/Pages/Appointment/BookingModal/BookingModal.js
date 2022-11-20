import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment,refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const fullName = form.fullName.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: fullName,
            slot,
            phone,
            email
        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    alert('Your booking done')
                    refetch()
                }
                else{
                    alert('You already have a booking on')
                }
            })
        // console.log(booking)        
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className=' grid grid-cols-1 lg:grid-cols-1 gap-5'>
                        <input type="text" disabled value={date} className="input input-bordered input-md w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            slots &&
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='fullName' type="text" disabled defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered input-md w-full" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-md w-full" />
                        <input name='email' type="text" disabled defaultValue={user?.email} placeholder="Email" className="input input-bordered input-md w-full" readOnly />
                        <input type="submit" value='Submit' className="btn btn-accent text-white w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;