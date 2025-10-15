import React from "react";

const JobDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 font-inter">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Title & Budget */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Frontend Developer Needed for Landing Page
            </h1>
            <p className="text-sm text-gray-500">Posted 2 hours ago</p>
          </div>
          <div className="text-blue-600 text-lg font-semibold">
            ₹8,000 - ₹10,000
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            Web Development
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            React.js
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            Tailwind CSS
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            HTML/CSS
          </span>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Job Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are looking for a talented frontend developer to build a
            responsive and modern landing page for our new product. The page
            must be pixel-perfect, mobile-friendly, and aligned with our brand
            guidelines. The design will be provided via Figma.
            <br />
            <br />
            Key responsibilities:
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Convert Figma design to code</li>
              <li>Implement responsive layout</li>
              <li>Ensure cross-browser compatibility</li>
              <li>Deliver clean and maintainable code</li>
            </ul>
          </p>
        </div>

        {/* Duration & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">
              Expected Duration
            </h3>
            <p className="text-gray-800 font-semibold">5 Days</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">
              Experience Level
            </h3>
            <p className="text-gray-800 font-semibold">Intermediate</p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="text-right">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition">
            Apply for this Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
