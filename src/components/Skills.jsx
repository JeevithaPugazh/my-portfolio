import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaLaptopCode, FaShareAlt, FaCloud,FaJsSquare, FaFigma, FaSketch, FaSearch, FaSitemap, FaClipboardList, FaCogs, FaPaintBrush, FaUsers
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";



const allSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <FaJsSquare className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <FaReact className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-sky-400" /> },
  { name: "Vite", icon: <FaReact className="text-purple-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "VS Code", icon: <FaLaptopCode className="text-blue-400" /> },
  { name: "Postman", icon: <FaShareAlt className="text-red-600" /> },
  { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
  { name: "Research", icon: <FaSearch className="text-blue-500" /> },
  { name: "Wireframing", icon: <FaSitemap className="text-yellow-500" /> },
  { name: "User Testing", icon: <FaClipboardList className="text-teal-500" /> },
  { name: "Prototyping", icon: <FaCogs className="text-orange-500" /> },
  { name: "UI Design", icon: <FaPaintBrush className="text-purple-700" /> },
  { name: "Usability", icon: <FaUsers className="text-green-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 bg-white/5 hover:bg-white/10 p-4 rounded-xl shadow transition-transform duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl">{skill.icon}</div>
              <p className="text-xs md:text-sm font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
