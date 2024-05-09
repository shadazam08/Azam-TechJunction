import React from 'react'
import DashBoard from '../Dashboard/DashBoard';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Courses from '../Courses/Courses';
import Tutorial from '../Tutorial/Tutorial';
import Notes from '../Notes/Notes';
import Contact from '../Contact/Contact';

const Routes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<DashBoard />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/tutorial' element={<Tutorial />} />
                <Route path='/notes' element={<Notes />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route path='/' element={<DashBoard />} />
                <Route path='/' element={<DashBoard />} /> */}
            </>
        )
    )
    return (
        <>
            <NavBar />
            <RouterProvider router={router} />
        </>
    )
}

export default Routes
