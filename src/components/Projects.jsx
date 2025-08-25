import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "An interactive web app with smooth UI animations.",
    image: "https://via.placeholder.com/300", // Replace with actual image later
  },
  {
    id: 2,
    title: "Project Two",
    description: "A gamified learning platform with AI-based recommendations.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A portfolio generator that customizes designs dynamically.",
    image: "https://via.placeholder.com/300",
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
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <Link
              to={`/projects/${project.id}`} // Update this based on your routes
              className="mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
