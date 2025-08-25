import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import ProjectDetail from "./pages/ProjectDetail";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects id="projects"/>
              <Skills />
              <Contact />
              <Footer /> 
            </>
          }
        />
  <Route path="/project1" element={<Project1 />} />
  <Route path="/project2" element={<Project2 />} />
  <Route path="/project3" element={<Project3 />} />
  <Route path="/aboutMe" element={<AboutMe />} />
  <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;