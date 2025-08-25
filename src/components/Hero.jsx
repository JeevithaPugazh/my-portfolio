import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false }, 
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: { value: ["#00ffff"]},
      shape: {type: "circle"},
      opacity: { value: 0.5, random:true },
      size: { value: 10, random: true },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        outModes: "bounce",
        
      },
      shadoe:{
        enable:true,
        blur:10,
        color:"#00ffff",
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        
      },
      modes: {
       repulse: {
          distance: 150,
          duration: 0.4,
        },
        
      },
    },
    retina_detect: true,
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      
      <Particles
       id="tsparticles"
  className="absolute inset-0 w-full h-full z-0"
  init={particlesInit}
  options={options}
/>


<div className="relative z-10 max-w-xl px-6 py-10 bg-black bg-opacity-60 rounded-xl shadow-lg backdrop-blur-md">
  <h1 className="text-5xl font-bold">Hello, I'm Jeevitha 👩‍💻</h1>
  <p className="mt-4 text-lg text-gray-300">
  With a focus on clean code and thoughtful design, I build engaging digital interfaces.
  </p>
  <p className="mt-2 text-sm text-gray-400">
  Currently open to new opportunities and collaborations.
</p>
  <button onClick={() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }} className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full text-lg shadow-md transition-transform transform hover:scale-105">
    🚀 Explore Projects!
  </button>
</div>
    </section>
  );
};

export default Hero;
