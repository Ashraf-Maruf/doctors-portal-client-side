import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const AddDoctor = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { data: specialties, refetch, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-nine-alpha.vercel.app/appointmentSpecialty');
            const data = await res.json()
            return data;
        }
    })
    const handleAddDoctor = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('https://doctors-portal-server-nine-alpha.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            refetch()
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-[800px]'>
            <h2 className=' font-bold mb-[30px] pt-[45px] text-3xl'>Add a New Doctor</h2>
            <div className="card w-auto md:w-96 lg:w-96 xl:w-96 bg-base-100 shadow-xl">
                <div className="card-body flex-grow-0">
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")}
                            type='name'
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: "Email Address is required"
                        })} type='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select
                            {...register('specialty')}
                            className="select select-bordered w-full max-w-xs mb-3">
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                        </select>
                        <div className="form-control w-full max-w-xs mb-3">
                            <label className="label"> <span className="label-text">Photo</span></label>
                            <input type="file" {...register("image", {
                                required: "Photo is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>
                        <input type="submit" value='Add' className='btn btn-accent w-full text-white' />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddDoctor;