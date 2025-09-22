
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ZoomableImage from "../components/ZoomableImage";

const Project2 = () => {
  const [fade, setFade] = useState(false);
  useEffect(() => { setFade(true); }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#232526] via-[#414345] to-[#485563] text-white transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
  <section className="relative w-full max-w-6xl mx-auto min-h-[420px] flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-2xl p-8 md:p-16 md:mt-16 mb-16  bg-gradient-to-br from-[#232526] via-[#414345] to-[#485563] overflow-hidden">
        {/* Animated Accent Circle */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
        {/* Left: Text */}
  <div className="relative z-10 flex-1 flex flex-col items-start justify-center gap-6 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-2 tracking-tight">Lynkie</h1>
          <p className="text-lg md:text-2xl text-blue-100 font-medium drop-shadow mb-2">
            The hiring app, <span className="font-bold text-white">Smart Hiring</span> and fast recruiting
          </p>
          <p className="text-base md:text-lg text-blue-200 bg-blue-950/60 rounded-lg px-4 py-2 mb-2">
            End-to-End Development: UX Research, Figma UI Design, MERN Stack Development, and Deployment
          </p>
          <p className="text-blue-100 mb-2">
            Led the full project lifecycle of Lynkie — from user research and wireframes to high-fidelity UI design, full-stack MERN development with JWT authentication, and live deployment.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.figma.com/proto/CL9P26H6ETBZIr6zxzZCUf/Linkie?node-id=1-166&t=5uQnWwx5Ou9MDNoD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A143" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 font-semibold transition">Live Figma File</a>
            <a href="https://lynkie.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 font-semibold transition">Live Project</a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="relative z-10 flex-1 flex justify-center items-center mt-10 md:mt-0 md:ml-8">
          <div>
            <img 
              src="../images/Lynkie/Lynkie-1.png"
              alt="Lynkie App Screenshot" 
              className="w-full max-w-4xl h-80 md:h-[32rem] object-contain rounded-2xl shadow-lg hover:scale-102 transition-transform duration-300" 
            />
          </div>
        </div>
        {/* Subtle Glow at Bottom */}
        <div className="absolute w-full h-2 left-0 bottom-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 blur-lg opacity-60" />
      </section>

      {/* Overview Section */}
      <section className="max-w-4xl mx-auto mb-12 bg-blue-950/60 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-200">Project Overview</h2>
        <p className="text-blue-100 mb-2">Lynkie is an AI-powered hiring app designed to streamline the job search and screening process for both employers and job seekers, with advanced video capabilities and smart matching.</p>
        <ul className="list-disc pl-6 text-blue-100 space-y-1">
          <li>AI-driven candidate screening and ranking</li>
          <li>Video interview and resume features</li>
          <li>Employer dashboard for job management</li>
          <li>Job seeker dashboard for applications and status tracking</li>
          <li>Mobile-first, responsive design</li>
        </ul>
        {/* Mobile Screens Section */}
        <section className="max-w-6xl mx-auto mb-12 flex flex-col gap-12 items-center justify-center">
          <ZoomableImage
            src="../images/Lynkie/MobileScreen-1.png"
            alt="Lynkie Mobile Screen 1"
            className="w-full max-w-3xl h-96 object-contain rounded-2xl shadow-lg border border-white/20"
            caption="Mobile Screen 1"
          />
          <ZoomableImage
            src="../images/Lynkie/MobileScreen-2.png"
            alt="Lynkie Mobile Screen 2"
            className="w-full max-w-3xl h-96 object-contain rounded-2xl shadow-lg border border-white/20"
            caption="Mobile Screen 2"
          />
        </section>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl mx-auto mb-12 bg-blue-950/60 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-200">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-900/60 rounded-xl p-6 flex flex-col gap-2 shadow">
            <h3 className="text-xl font-semibold text-blue-100">AI-Powered Screening</h3>
            <p className="text-blue-200">Automated candidate ranking and filtering using advanced algorithms.</p>
          </div>
          <div className="bg-blue-900/60 rounded-xl p-6 flex flex-col gap-2 shadow">
            <h3 className="text-xl font-semibold text-blue-100">Video Interviewing</h3>
            <p className="text-blue-200">Integrated video resume and interview tools for a modern hiring experience.</p>
          </div>
          <div className="bg-blue-900/60 rounded-xl p-6 flex flex-col gap-2 shadow">
            <h3 className="text-xl font-semibold text-blue-100">Smart Dashboards</h3>
            <p className="text-blue-200">Custom dashboards for employers and job seekers to manage jobs and applications.</p>
          </div>
          <div className="bg-blue-900/60 rounded-xl p-6 flex flex-col gap-2 shadow">
            <h3 className="text-xl font-semibold text-blue-100">Mobile-First Design</h3>
            <p className="text-blue-200">Fully responsive UI for seamless experience on any device.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="flex justify-center mb-12">
        <a href="https://www.figma.com/proto/CL9P26H6ETBZIr6zxzZCUf/Linkie?node-id=1-166&t=5uQnWwx5Ou9MDNoD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A143" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 font-semibold transition mx-2">Live Figma File</a>
        <a href="https://lynkie.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 font-semibold transition mx-2">Live Project</a>
      </div>

      {/* Back to Home */}
      <div className="flex justify-center mb-8">
        <Link to="/" className="text-blue-400 hover:underline text-lg">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Project2;