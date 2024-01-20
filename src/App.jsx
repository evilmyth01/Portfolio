import Hero from "./components/Hero/Hero"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Skills from "./components/Skills/Skills.jsx"
import WorkExperience from "./components/WorkExperience/WorkExperience.jsx"
import ContactMe from "./components/ContactMe/ContactMe.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {Routes, Route } from 'react-router-dom';
import Navpage from "./Navpage.jsx"

function App() {
  

  return (
    <>
      
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />      
      </div>
      <Footer />
    </>
  )
}

{/* <Routes>
      <Navbar />
      <div className="container">
        <Hero />
        <Route path="/skills" component={Skills} />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
      </Routes>*/ }

export default App
