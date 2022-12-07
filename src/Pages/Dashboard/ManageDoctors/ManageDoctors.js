import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {

            try {
                const res = await fetch('https://doctors-portal-server-nine-alpha.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }

        }
    });
    const handleDeleteDoctor = doctor => {
        console.log(doctor)
        fetch(`https://doctors-portal-server-nine-alpha.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Doctor ${doctor.name} delete successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <h3 className=' mb-[30px] pt-[45px] text-3xl font-bold'>Manage Doctors: {doctors.length}</h3>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>specialty</th>
                            <th>Doctors Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors &&
                            doctors.map((doctor, i) => <tr

                                key={doctor._id}

                            >
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    < label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-accent text-white" >Delete</label >
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. lt cannot be undone`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    modalDate={deletingDoctor}
                    successButtonName="Delete"
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;