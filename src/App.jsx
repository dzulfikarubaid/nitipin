import React, {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Navbar from "./particles/Navbar"
import Project from "./pages/Project"
import Worker from "./pages/Freelancer"
import Freelancer from "./pages/Freelancer"
import Blank from "./particles/Blank"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Cookies from 'universal-cookie'
import ProtectedRoute from "./particles/ProtectedRoute"
import Logged from "./particles/Logged"
import Profile from "./pages/Profile"
import Error from "./pages/Error"
import Map from "./particles/Map"
import Dashboard from "./pages/Dashboard"



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Blank></Blank>
    <Routes>
      <Route path="/" element={<Logged><Landing /></Logged>}></Route>
      <Route path="/project" element={
        <ProtectedRoute>
          <Project />
      </ProtectedRoute>} >
      </Route>
      <Route path="/profile" element={<ProtectedRoute>
        <Profile />
      </ProtectedRoute>}></Route>
      <Route path="/freelancer" element={<Freelancer />}></Route>
      <Route path="/login" element={<Logged><Login/></Logged>}></Route>
      <Route path="/signup" element={<Logged><Signup /></Logged>}></Route>
      <Route path="/about" element={<Logged><About /></Logged>}></Route>
      <Route path="/map" element={<Map />}></Route>
      <Route path="/dashboard" element={<ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
    </>
    
  )
}

export default App
