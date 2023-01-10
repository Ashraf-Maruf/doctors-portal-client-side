import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import NotFoundImg from '../../../assets/NotFound-Img/404-page-logo.jpg'
const DisplayError = () => {
    const error = useRouteError();
    console.error(error)
    const { userSignOutAccount } = useContext(AuthContext);

    const handleSingOut = () => {
        userSignOutAccount()
            .then(() => { })
            .catch((error) => {
                console.error(error)
            })

    }
    return (
        <div>
            <div className='flex justify-center items-center h-[352px] bg-slate-600'>
                <h1 className=' text-white text-7xl font-bold'>404</h1>
            </div>
            <div className='flex justify-center items-center mt-28'>
                <img src={NotFoundImg} alt='' ></img>
            </div>
            <div className='text-center mb-20'>
                <h3 className=' mt-5 text-5xl font-bold mb-3'>Oops...</h3>
                <p>Your email address access time-out Please sign out. Then try to login. thank you</p>
                <Link to='/'><button onClick={handleSingOut} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-4">Back to SignOut</button></Link>
            </div>
        </div>
    );
};

export default DisplayError;