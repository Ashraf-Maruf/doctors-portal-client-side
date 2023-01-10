import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import {
    HiBars3BottomRight,
    HiOutlineXMark,
} from "react-icons/hi2";
import { useState } from 'react';
import './Header.css'
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
    const [open, setOpen] = useState(false)
    const boxShadow = {
        boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
    };
    return (
        <div className='border-b-2 border-accent'>
            <div className='px-4 py-2'>
                <div className="navbar px-0 md:px-0 lg:px-0 2xl:px-0 z-20">
                    <div className='navbar-start 2xl:w-full'>
                        <div className="navbar-start lg:hidden relative">
                            <div className='text-center ' onClick={() => setOpen(!open)}>
                                {open ?
                                    <span className='open-nav'><HiOutlineXMark /></span>
                                    :
                                    <span className='close-nav'><HiBars3BottomRight /></span>
                                }
                            </div>
                            <div className={` absolute duration-700 ease-out ${open ? 'activeOpen' : 'left-[-999px]'}`}>
                                <div className=" bg-white" onClick={() => setOpen(!open)} style={boxShadow}>
                                    <div className=' flex justify-center items-center'>
                                        <ul className='menu-area px-5 text-1xl pt-8 pb-8 text-primary font-Ubuntumenu-compact items-center dropdown-content text-center rounded-box'>
                                            <li className=' py-2'><Link className=' font-semibold' to='/'>Home</Link></li>
                                            <li className=' py-2'><Link className=' font-semibold' to='/appointment'>Appointment</Link></li>
                                            {user?.uid ?
                                                <>
                                                    <li className=' py-2'><Link className=' font-semibold' to='/dashboard'>Dashboard</Link></li>
                                                    <li className=' py-2'><Link onClick={handleSingOut} className=' font-semibold' to='/'>SignOut</Link></li>
                                                </>
                                                : <li className=' py-2'><Link className=' font-semibold' to='/login'>Login</Link></li>
                                            }
                                            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                            </label>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' hidden lg:block xl:block 2xl:block'>
                            <Link to='/' className="normal-case text-[18px] font-normal leading-24px">Doctors Portal</Link>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className=' hidden lg:inline-block xl:inline-block 2xl:inline-block'>
                            <ul className="navbar-menu flex items-center">
                                <li className=' py-2'><Link className=' font-semibold' to='/'>Home</Link></li>
                                <li className=' py-2'><Link className=' font-semibold' to='/appointment'>Appointment</Link></li>
                                {user?.uid ?
                                    <>
                                        <li className=' py-2'><Link className=' font-semibold' to='/dashboard'>Dashboard</Link></li>
                                        <li className=' py-2'><Link onClick={handleSingOut} className=' font-semibold' to='/'>SignOut</Link></li>
                                    </>
                                    : <li className=' py-2'><Link className=' font-semibold' to='/login'>Login</Link></li>
                                }
                            </ul>
                        </div>
                        <div className=' lg:hidden xl:hidden 2xl:hidden'>
                            <Link to='/' className="normal-case text-[18px] font-normal leading-24px">Doctors Portal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;