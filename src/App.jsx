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
      <Route path="/freelancer" element={<Freelancer />}></Route>
      <Route path="/login" element={<Logged><Login/></Logged>}></Route>
      <Route path="/signup" element={<Logged><Signup /></Logged>}></Route>
      <Route path="/about" element={<Logged><About /></Logged>}></Route>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
    </>
    
  )
}

export default App
