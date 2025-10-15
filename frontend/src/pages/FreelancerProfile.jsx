import React from "react";
import { Link, useParams } from "react-router-dom";

const FreelancerProfile = () => {
  const { freelancerId } = useParams();
  const freelancer = {
    name: "Abhay Raj",
    title: "Full Stack Developer",
    bio: "Experienced developer with expertise in React, Node.js, and Spring Boot. Passionate about building scalable web applications.",
    hourlyRate: "$25/hr",
    rating: 4.8,
    reviews: 35,
    skills: ["Java", "React", "Spring Boot", "MySQL", "Node.js"],
    projects: [
      { name: "Job Portal", description: "Built using Spring Boot and React." },
      {
        name: "Chat App",
        description: "Real-time app using Socket.io and Node.js.",
      },
    ],
  };

  return (
    <div className="min-h-[100%] bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6">
        {/* Header */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src="/assets/avatar1.png"
            alt="Freelancer"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{freelancer.name}</h2>
            <p className="text-gray-600">{freelancer.title}</p>
            <p className="text-blue-500 font-medium">{freelancer.hourlyRate}</p>
            <p className="text-yellow-500 mt-1">
              ⭐ {freelancer.rating} ({freelancer.reviews} reviews)
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-gray-700">{freelancer.bio}</p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {freelancer.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Projects</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {freelancer.projects.map((project, index) => (
              <li key={index}>
                <strong>{project.name}</strong>: {project.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <Link
            to={`/post-job/${freelancerId}`}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Hire Me
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
