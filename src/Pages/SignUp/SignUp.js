import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const SignUp = () => {
    const { register, handleSubmit } = useForm();    
    const handleSignUp = data =>{
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center mx-5'>
            <div className="card w-[385px] h-[556px] bg-base-100 shadow-xl">
                <div className="card-body flex-grow-0">
                    <h3 className='text-center text-2xl font-normal'>Sign Up</h3>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type='text' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type='text' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type='password' placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                        <input type="submit" value='Sign Up' className='btn btn-primary w-full text-white' />
                    </form>
                    <p className='h-0'>New to Doctors Portal?<Link className=' text-secondary ml-4'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;