import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills/Skills.jsx"
import WorkExperience from "./components/WorkExperience/WorkExperience.jsx"
import ContactMe from "./components/ContactMe/ContactMe.jsx"
import Footer from "./components/Footer/Footer.jsx"


function Navpage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes> 
    </>
  )
}

export default Navpage