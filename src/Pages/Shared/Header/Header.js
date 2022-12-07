import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
    const { user, userSignOutAccount } = useContext(AuthContext);

    const handleSingOut = () => {
        userSignOutAccount()
            .then(() => { 
                toast.success(`Your Sing Out Successfully`)
            })
            .catch((error) => {
                console.error(error)
            })

    }


    const menuItems = <React.Fragment>
        <li><Link className='hover:bg-[#3A4256] hover:text-[#FFFFFF] hover:rounded-xl' to='/'>Home</Link></li>
        <li><Link className=' hover:bg-[#3A4256] hover:text-[#FFFFFF] hover:rounded-xl' to='/appointment'>Appointment</Link></li>
        {user?.uid ?
            <>
                <li><Link className=' hover:bg-[#3A4256] hover:text-[#FFFFFF] hover:rounded-xl' to='/dashboard'>Dashboard</Link></li>
                <li><button className=' hover:bg-[#3A4256] hover:text-[#FFFFFF] hover:rounded-xl' onClick={handleSingOut} to='/login'>SignOut</button></li>
            </>
            : <li><Link className=' hover:bg-[#3A4256] hover:text-[#FFFFFF] hover:rounded-xl ' to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 justify-between shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="navbar-menu menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="navbar-menu menu menu-horizontal p-0">
                    {menuItems}                    
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;