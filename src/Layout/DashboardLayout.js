import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Header from '../Pages/Shared/Header/Header';
import useAdmin from './../hooks/useAdmin';
import './DashboardLayout.css'
const DashboardLayout = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile mt-2">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content z-20 px-8 bg-slate-100">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="navbar-menu menu pl-3 pt-10 w-80 md:bg-base-100 lg:bg-base-100 xl:bg-transparent  text-base-content">
                        <li><Link className='hover:bg-slate-100 rounded-l-lg' to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link className=' hover:bg-slate-100 rounded-l-lg' to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link className=' hover:bg-slate-100 rounded-l-lg' to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                                <li><Link className=' hover:bg-slate-100 rounded-l-lg' to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                                <li><Link className=' hover:bg-slate-100 rounded-l-lg'  to='/dashboard/contact'>User Message</Link></li>                            
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;