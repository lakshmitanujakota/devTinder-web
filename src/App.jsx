import { useState } from 'react'
import Navbar from './NavBar';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import Body from './Body';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Profile" element={<Profile/>}/>
        </Route>
      </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
