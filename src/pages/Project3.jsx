import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ZoomableImage from "../components/ZoomableImage";

const Project3 = () => {
 //useState and useEffect hooks to trigger the fade-in effect when the component is loaded
        const [fade, setFade] = useState(false);
    
        useEffect(()=>{
            setFade(true);
        },[]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#232526] via-[#414345] to-[#485563] text-white transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      {/* Overview Section */}
  <section className="max-w-4xl mx-auto mt-16 mb-12 bg-blue-950/60 rounded-2xl p-8 shadow-lg flex flex-col items-center gap-8">
  <span className="inline-block bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-full text-sm mb-4 shadow-md uppercase tracking-wider">Coming Soon</span>
  <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6 tracking-tight">FitMates</h1>
        <div className="w-full max-w-3xl aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-8 bg-white/10 border border-white/20 shadow-lg">
          <ZoomableImage
            src={"../images/FitMates/FitMates-1.png"}
            alt="FitMates App Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <p className="text-lg md:text-xl text-blue-100 font-medium mb-4">
            FitMates is a social fitness platform that helps users find workout partners, join group challenges, and track progress together. The app features real-time messaging, personalized fitness plans, and a vibrant community to keep users motivated and accountable.
          </p>
          <ul className="list-disc pl-6 text-blue-100 space-y-1">
            <li>Find and connect with local workout partners</li>
            <li>Join group fitness challenges and leaderboards</li>
            <li>Personalized fitness plans and progress tracking</li>
            <li>Real-time chat and community support</li>
            <li>Mobile-first, responsive design</li>
          </ul>
        </div>
      </section>
  <div className="flex justify-center">
        <Link to="/" className="text-blue-400 hover:underline text-lg">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Project3;
