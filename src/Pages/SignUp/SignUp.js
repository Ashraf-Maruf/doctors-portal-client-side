import React, { useContext, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();    
    const {userCreateAccount,UserUpdateProfile} = useContext(AuthContext)
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate()
    if(token){
        navigate('/')
    }
    const handleSignUp = data =>{
        console.log(data.email, data.password)

        userCreateAccount(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            const upDateProfile = {
                displayName: data.name
            }
            UserUpdateProfile(upDateProfile)
            .then(() =>{
                saveUser(data.name, data.email)
            })
            .catch(error => console.error(error))
        })
        .catch(error =>{
            console.error(error)
        }) 
    }

    const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);        
            setCreatedUserEmail(email);
        })
    }

   

    return (
        <div className='h-[800px] flex justify-center items-center mx-5'>
            <div className="card w-[385px] h-[650px] bg-base-100 shadow-xl">
                <div className="card-body flex-grow-0">
                    <h3 className='text-center text-2xl font-normal'>Sign Up</h3>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email",{
                            required:"Email Address is required"
                        })} type='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password",{
                            required:"Your Password is required",
                            minLength:{value:6, message: "Password must be 6 characters long"},
                            pattern:{value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:'Password must have uppercase number and special characters'}
                        })} type='password' placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
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