import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Project1 = () => {
    //useState and useEffect hooks to trigger the fade-in effect when the component is loaded
    const [fade, setFade] = useState(false);

    useEffect(()=>{
        setFade(true);
    },[]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 transition-opacity duration-1000 ${fade? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-4xl font-bold">Project 1</h1>
      <p className="mt-4 text-lg">
        This is the detailed page for Project 1.
      </p>
      <Link
        to="/"
        className="mt-6 text-blue-400 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default Project1;
