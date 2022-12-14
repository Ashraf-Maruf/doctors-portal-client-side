import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userSignInAccount,googleProviderLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);  
    const googleRegister = new GoogleAuthProvider() 
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';
    
    if (token) {
        navigate(from, { replace: true });
    }
    const handleGoogleSingIn = () => {
        googleProviderLogin(googleRegister)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user.email)
                toast.success('Your Login successfully')
            })
            .catch(error => console.error(error))
    }
    const handleLogin = data => {
        console.log(data)
        setLoginError('');
        userSignInAccount(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email)
                toast.success(`Your Login successfully`)
            })
            .catch(error => {
                console.log(error.message)
                toast.error(`Your password is incorrect`)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent text-white w-full mt-4 mb-3' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSingIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;