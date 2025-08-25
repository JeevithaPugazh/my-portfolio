import React from "react";
import { useParams, Link } from "react-router-dom";

const projectData = [
  {
    id: "1",
    title: "Project One",
    description: "An interactive web app with smooth UI animations.",
  },
  {
    id: "2",
    title: "Project Two",
    description: "A gamified learning platform with AI-based recommendations.",
  },
  {
    id: "3",
    title: "Project Three",
    description: "A portfolio generator that customizes designs dynamically.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/" className="mt-6 text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg">{project.description}</p>
      <Link to="/" className="mt-6 text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
};

export default ProjectDetail;