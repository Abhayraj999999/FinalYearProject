import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const WorkDetails = () => {
  const { id } = useParams();
  const handleApply = () => {
    // Show toast
    toast.success("Application submitted!");
  };
  // Dummy data for now – in a real app, you'd fetch job details using this id
  const job = {
    id,
    title: "Full Stack Developer Needed for E-commerce Website",
    company: "TechCorp Solutions",
    postedOn: "August 5, 2025",
    description:
      "We're looking for an experienced full-stack developer to build a responsive e-commerce site using React and Spring Boot. You should have experience with REST APIs, payment gateway integration, and deployment on cloud services like AWS.",
    skills: ["React", "Spring Boot", "MySQL", "AWS", "REST APIs"],
    budget: "$2000 - $3000",
    deadline: "1 Month",
    location: "Remote",
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-4">
        {job.company} • Posted on {job.postedOn}
      </p>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Job Description</h3>
        <p className="text-gray-700 mb-4">{job.description}</p>

        <h3 className="text-xl font-semibold mb-2">Skills Required</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-md font-medium text-gray-600">Budget</h4>
            <p className="text-gray-800">{job.budget}</p>
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-600">Deadline</h4>
            <p className="text-gray-800">{job.deadline}</p>
          </div>
        </div>

        <button
          onClick={handleApply}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Apply for this Job
        </button>
      </div>
    </section>
  );
};

export default WorkDetails;
