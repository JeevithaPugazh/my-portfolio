import React from "react";
import ZoomableImage from "../components/ZoomableImage";

export default function ReviewHub() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[420px] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#232526] via-[#414345] to-[#485563] pt-28 pb-12 px-4 md:px-16 mb-12 overflow-hidden">
    {/* Animated Accent Circle */}
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
    {/* Left: Title & Description */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center gap-6 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-2 tracking-tight">Review Hub</h1>
        <p className="text-lg md:text-xl text-blue-100 font-medium drop-shadow mb-4">
          End-to-end project: UX research, UI design in Figma, and full-stack development using the MERN stack with JWT authentication.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="https://www.loom.com/share/9abc89912eb54a1cb94b1326d8922b80?sid=321cfecb-0dd3-4642-a4a6-12a72f4b13d2 " className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 font-semibold transition">Live Demo</a>
          <a href="https://github.com/JeevithaPugazh/review-dashboard-client" className="px-6 py-2 bg-white/20 text-white rounded-full shadow hover:bg-white/30 font-semibold transition border border-white/30">GitHub</a>
        </div>
      </div>
      {/* Right: Floating Project Image */}
      <div className="relative z-10 flex-1 flex justify-center items-center mt-10 md:mt-0">
      <div className="rounded-3xl shadow-2xl border-4 border-white/20 bg-white/10 backdrop-blur-lg p-2 md:p-4">
          <img 
            src="../images/ReviewHub/LoginPage.png" 
            alt="Review Hub Screenshot" 
            className="w-full max-w-4xl h-72 md:h-[32rem] object-cover rounded-2xl shadow-lg hover:scale-102 transition-transform duration-300" 
          />
      </div>
      </div>
    {/* Subtle Glow at Bottom */}
    <div className="absolute w-full h-2 left-0 bottom-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 blur-lg opacity-60" />
  </section>
  <div className="max-w-5xl mx-auto px-6 py-12 pt-0 space-y-16">
      {/* 🌟 Overview */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-2">🌟 Overview</h2>
        <p className="text-gray-800">
          Review Hub is a review aggregation platform I designed and developed from scratch. Starting with UX research and competitor analysis, I mapped user needs into wireframes and prototypes in Figma, then built the platform using the MERN stack (MongoDB, Express, React, Node.js) with JWT authentication for security.
        </p>
        <div className="flex justify-center items-center">
          <ZoomableImage
            src="../images/ReviewHub/ReviewDashboardPage.png"
            alt="Review Dashboard Page - desktop and mobile mockup"
            className="h-80 md:h-[28rem] max-h-[28rem] w-auto object-contain rounded-lg shadow-md"
            caption="Review Dashboard Page: Desktop and mobile mockup"
          />
        </div>
      </section>

      {/* 🔍 Research */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-2">🔍 Research</h2>
        {/* Competitor Analysis */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Competitor Analysis</h3>
          <p>
            I analyzed four major platforms — Google Reviews, Yelp, Facebook Reviews, and TripAdvisor — focusing on:
          </p>
          <ul className="list-disc pl-6">
            <li>Features and filtering capabilities</li>
            <li>User demographics and expectations</li>
            <li>Weaknesses (e.g., cluttered dashboards, limited category filters)</li>
          </ul>
          <p className="mt-2">👉 Findings highlighted opportunities for deeper filtering, category-based ratings, and a modern, simplified dashboard.</p>
          <div className="flex flex-col items-center justify-center w-full mt-2">
            <ZoomableImage
              src="../images/ReviewHub/SWOT-Analysis.png"
              alt="SWOT Analysis Comparative Matrix"
              className="w-full max-w-4xl h-72 md:h-[28rem] object-contain rounded-lg shadow mb-2"
              caption="SWOT Analysis: Comparative matrix of features vs platforms"
            />
          </div>
        </div>
        {/* Survey Findings */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Survey Findings</h3>
          <ul className="list-disc pl-6">
            <li>66% consider taste extremely important</li>
            <li>74% prioritize food safety</li>
            <li>58% value being a return customer</li>
            <li>56% highlight portion size</li>
            <li>Promptness (on-time delivery & correct orders) was the top service factor</li>
          </ul>
          <div className="flex flex-col items-center justify-center w-full mt-2 relative">
            <ZoomableImage
              src="../images/ReviewHub/Survey report.jpg"
              alt="Survey Report - Pie charts and bar graphs of survey stats"
              className="w-full max-w-3xl h-64 md:h-80 object-contain rounded-lg shadow mb-2"
              caption="Survey Report"
            />
            {/* Zoom Modal removed, now handled globally */}
          </div>
        </div>
        {/* Task Analysis */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Task Analysis</h3>
          <p>We mapped core user journeys to guide design:</p>
          <ul className="list-disc pl-6">
            <li>Browsing reviews by category</li>
            <li>Filtering by food, service, value, or ambiance</li>
            <li>Accessing a personalized dashboard</li>
          </ul>
          <p className="mt-2">This ensured usability and alignment with real customer behaviors.</p>
          
          <div className="flex flex-col items-center justify-center w-full mt-2">
            {/* Pyramid image removed as requested */}
          </div>
          {/* Customer Insights from Text Analysis */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Customer Insights from Text Analysis:</h4>
            <p className="text-gray-800 mb-2">Customers place significant importance on three key aspects: <span className="font-semibold">Food & Menu</span>, <span className="font-semibold">Fine Dining</span>, and <span className="font-semibold">Services</span>.</p>
            <ul className="list-disc pl-6 mb-2">
              <li><span className="font-semibold">Food & Menu:</span> 47.6% of reviews focus on menus, flavors, desserts, wine, and new items.</li>
              <li><span className="font-semibold">Fine Dining:</span> 31.7% of customers comment on time-related factors — waiting time, traffic, parking, and reservations — showing timing greatly impacts their experience.</li>
              <li><span className="font-semibold">Services:</span> 51.4% of reviews highlight service quality, ranging from friendly and efficient to poor or slow service.</li>
            </ul>
            <p className="text-gray-800">Overall, reviews include positive and negative sentiments, with primary focus on food, dining experiences, and service quality.</p>
            {/* Insights from 1000+ Reviews: Food, Service, Timing */}
            <div className="mt-8">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <ZoomableImage
                  src="../images/ReviewHub/pi-chart(1).png"
                  alt="Food Insights Pie Chart"
                  className="w-full max-w-xs h-48 object-contain rounded-lg shadow"
                  caption="Food"
                />
                <ZoomableImage
                  src="../images/ReviewHub/pi-chart(2).png"
                  alt="Service Insights Pie Chart"
                  className="w-full max-w-xs h-48 object-contain rounded-lg shadow"
                  caption="Service"
                />
                <ZoomableImage
                  src="../images/ReviewHub/pi-chart(3).png"
                  alt="Timing Insights Pie Chart"
                  className="w-full max-w-xs h-48 object-contain rounded-lg shadow"
                  caption="Timing"
                />
              </div>
              <div className="text-center mt-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">Insights from 1000+ Reviews: Food, Service, Timing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎨 Design */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">🎨 Design</h2>
        <p>
          Built a pyramid model prioritizing Food → Value → Service → Ambiance.<br/>
          Created low-fidelity wireframes in Figma to validate navigation and flows.<br/>
          Iterated into high-fidelity UI designs with modern, responsive layouts.
        </p>
         <div className="flex flex-col gap-8 w-full items-center">
           <ZoomableImage
             src="../images/ReviewHub/Pyramid.jpg"
             alt="Pyramid Model - Food, Value, Service, Ambiance"
             className="w-full max-w-2xl h-72 md:h-96 object-contain rounded-lg shadow mb-2"
             caption="Pyramid Model"
           />
           <ZoomableImage
             src="../images/ReviewHub/Lo-fi (1).png"
             alt="Low-fi Wireframe 1"
             className="w-full max-w-2xl h-72 md:h-96 object-contain rounded-lg shadow mb-2"
             caption="Lo-fi Wireframe 1"
           />
           <ZoomableImage
             src="../images/ReviewHub/Lo-fi (2).png"
             alt="Low-fi Wireframe 2"
             className="w-full max-w-2xl h-72 md:h-96 object-contain rounded-lg shadow mb-2"
             caption="Lo-fi Wireframe 2"
           />
           <ZoomableImage
             src="../images/ReviewHub/Lo-fi (3).png"
             alt="Low-fi Wireframe 3"
             className="w-full max-w-2xl h-72 md:h-96 object-contain rounded-lg shadow mb-2"
             caption="Lo-fi Wireframe 3"
           />
         </div>

      </section>


      {/* 💻 Development */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">💻 Development</h2>
        <ul className="list-disc pl-6">
          <li>Tech Stack: MERN + JWT Authentication</li>
          <li>Frontend: React (responsive UI with category-based filtering, dashboard views)</li>
          <li>Backend: Node.js + Express + TypeScript (RESTful APIs, modular routes, error handling)</li>
          <li>Database: MongoDB with Mongoose (schemas for users, reviews, categories)</li>
          <li>Authentication: JWT for secure login & protected routes</li>
          <li>Extras: State management with React hooks, form validation, responsive design</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col items-center justify-center">
            <ZoomableImage
              src="../images/ReviewHub/middleware.png"
              alt="JWT Middleware Code Snippet"
              className="w-full max-w-lg h-64 object-contain rounded-lg shadow mb-2 bg-gray-100 border-2 border-dashed border-gray-400"
              caption="JWT Authentication Middleware with TypeScript in Node.js/Express"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <ZoomableImage
              src="../images/ReviewHub/ProductPage.png"
              alt="Product Page Screenshot"
              className="w-full max-w-lg h-64 object-contain rounded-lg shadow mb-2 bg-gray-100 border-2 border-dashed border-gray-400"
              caption="Product Page Screenshot"
            />
          </div>
        </div>
      </section>

      {/* 🚀 Outcome & Learnings */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-2">🚀 Outcome & Learnings</h2>
        <ul className="list-disc pl-6">
          <li>✅ Delivered a working full-stack platform from concept → research → design → development.</li>
          <li>✅ Gained hands-on experience in turning survey insights into prioritized features.</li>
          <li>✅ Improved skills in building secure APIs, structuring MongoDB schemas, and deploying MERN apps.</li>
          <li>✅ Learned the importance of iterative design testing before coding.</li>
        </ul>
        
      </section>

      {/* 📊 Key Features */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-2">📊 Key Features</h2>
        <ul className="list-disc pl-6">
          <li>User authentication & authorization (JWT)</li>
          <li>Category-based review filtering</li>
          <li>Personalized dashboards</li>
          <li>Mobile-first responsive design</li>
          <li>Data-driven insights (pyramid + survey integration)</li>
        </ul>
      </section>

      {/* 📂 Project Links */}
      <section className="text-center space-x-4">
        <a
          href="https://www.figma.com/proto/2jdr4F5m2vSpG1HxNT048F/Dashboard-design?node-id=132-1239&t=Wz0ZnE1a26MqKfKe-0&scaling=min-zoom&content-scaling=fixed&page-id=132%3A1238&starting-point-node-id=132%3A1239"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          🔗 View Figma Design
        </a>
        <a
          href="https://review-dashboard-client.onrender.com/"
          className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700"
        >
          🔗 Live Project
        </a>
        <a
          href="https://www.loom.com/share/9abc89912eb54a1cb94b1326d8922b80?sid=321cfecb-0dd3-4642-a4a6-12a72f4b13d2"
          className="px-6 py-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-800"
        >
          🎥 Demo Video
        </a>
        <a
          href="https://github.com/JeevithaPugazh/review-dashboard-client"
          className="px-6 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-900"
        >
          💻 GitHub Repository
        </a>
      </section>
    </div>
    </div>
  );
}
