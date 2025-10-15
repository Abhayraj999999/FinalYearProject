import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="job-card shadow-md border rounded-xl p-5 mb-4 hover:shadow-lg transition duration-300 bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            {job.title}
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            {job.description.slice(0, 100)}...
          </p>
          <p className="text-sm text-gray-500">
            <strong>Budget:</strong> ₹{job.budget} &nbsp; | &nbsp;
            <strong>Duration:</strong> {job.duration} days
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Posted by {job.clientName || "Client"} •{" "}
            {new Date(job.createdAt).toLocaleDateString()}
          </p>
        </div>
        <Link to={`/jobs/${job.id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
