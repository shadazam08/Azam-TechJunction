import React from 'react'
import AfterLoginNavbar from '../AfterLoginNavBar/AfterLoginNavbar'
import BNavBar from '../NavBar/BNavBar'
import DashBoard from '../Dashboard/DashBoard';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

const Routes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<LandingPage />} />
                <Route path='/dashboard' element={<DashBoard />} />
            </>
        )
    )
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routes
