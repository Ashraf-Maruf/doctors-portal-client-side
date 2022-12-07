import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const [userDelete, setUserDelete] = useState(null)
    const closeModal = () => {
        setUserDelete(null)
    }
    const { data: users = [],refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-nine-alpha.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })   
    const handleMakeAdmin = id => {
        fetch(`https://doctors-portal-server-nine-alpha.vercel.app/users/admin/${id}`,{

            method:'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Make admin successful')
                refetch();
            }
        })
    }

    const handleUserDelete = id => {
        console.log(id)
        fetch(`https://doctors-portal-server-nine-alpha.vercel.app/users/admin/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Patient ${id.name} delete successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='mb-[30px] pt-[45px] text-3xl font-bold'>All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,i) => <tr
                                key={user._id}
                            >
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin (user._id)} className='btn btn-accent text-white'>Make Admin</button>}</td>
                                <td>
                                    < label onClick={() => setUserDelete(user)} htmlFor="confirmation-modal" className="btn btn-accent text-white" >Delete</label >
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                userDelete && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${userDelete.name}. lt cannot be undone`}
                    closeModal={closeModal}
                    successAction={handleUserDelete}
                    modalDate={userDelete}
                    successButtonName="Delete"
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;