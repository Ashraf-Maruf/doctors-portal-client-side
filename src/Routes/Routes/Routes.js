import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import About from "../../Pages/About/About";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../../Pages/Dashboard/MyAppointment.js/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Appointment from './../../Pages/Appointment/Appointment/Appointment';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ])
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
    
])

export default router