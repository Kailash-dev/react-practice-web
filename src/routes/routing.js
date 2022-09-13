import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import NavbarComponent from '../components/Navbar';
export default function routing() {
  return (
    
    <Router>
         
         <NavbarComponent />
         <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/filter' element={<Filter />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
         </Routes>
    </Router>
  )
}


function Home() {
    return <h1>Home</h1>
    
}


function Filter() {
    return <h1>Filter</h1>
    
}


function Dashboard() {
    return <h1>dashboard</h1>
    
}