import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Review Hub",
    description: "End-to-end project: UX research, UI design in Figma, and full-stack development using the MERN stack with JWT authentication.",
    image: "./images/ReviewHub/ReviewHub.jpg", 
  },
  {
    id: 2,
    title: "Lynkie",
    description: "Lynkie is an AI Powered hiring app designed to streamline the job search and screening process for both employers and job seekers with video capabilities.",
    image: "./images/Lynkie/Lynkie.png",
  },
  {
    id: 3,
    title: "FitMates",
    description: "A fitness app that connects users with workout partners.",
    image: "./images/FitMates/FitMates-1.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg cursor-pointer hover:bg-gray-700 hover:scale-105 transition duration-300 text-white"
          >
            <div className="w-full h-64 flex items-center justify-center bg-transparent rounded-md overflow-hidden mb-4 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-300 ${project.id === 1 ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
                />
            </div>
              <div className="flex flex-col items-center w-full">
                <h3 className="text-xl font-bold mb-1 text-white text-center truncate w-full">{project.title}</h3>
                <p className="text-sm text-blue-200 mb-3 text-center line-clamp-3 w-full">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer text-sm font-semibold shadow"
                >
                  View More
                </Link>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
