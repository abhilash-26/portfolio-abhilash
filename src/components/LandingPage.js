import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import { Routes, Route } from "react-router";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

function LandingPage() {
  return (
    <div className='h-screen bg-[#131D25] flex flex-col items-center'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default LandingPage;
