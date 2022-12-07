import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

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
            <p className=' text-red-500'>Something went wrong!!!</p>
            <p><i>{error.statusText || error.message}</i></p>
            <h4 className='text-3xl'>Please <button onClick={handleSingOut}>Sign out</button>and log back in</h4>
        </div>
    );
};

export default DisplayError;