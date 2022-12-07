import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const ContactUser = () => {
    const [contact, setcontact] = useState(null)
    const closeModal = () => {
        setcontact(null)
    }
    const url = `https://doctors-portal-server-nine-alpha.vercel.app/contact`

    const { data: bookings, isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteDoctor = patient => {
        console.log(patient)
        fetch(`https://doctors-portal-server-nine-alpha.vercel.app/contact/${patient._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Patient ${patient.userEmail} delete successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className=' mb-[30px] pt-[45px] text-3xl font-bold'>Patient Message {bookings.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Delete Patient</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.userEmail}</td>
                                <td>{booking.userSubject}</td>
                                <td>{booking.userMessage}</td>
                                <td>
                                    < label onClick={() => setcontact(booking)} htmlFor="confirmation-modal" className="btn btn-accent text-white" >Delete</label >
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                contact && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${contact.userEmail}. lt cannot be undone`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    modalDate={contact}
                    successButtonName="Delete"
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ContactUser;