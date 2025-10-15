import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import axios from "axios";

const FindWork = () => {
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const selectedCategory = params.get("category");

  // Data coming from backend (or fallback to dummy)
  const data = useLoaderData();
  console.log("Loaded jobs:", data);

  // Optional filter by category
  // const filteredJobs = selectedCategory
  //   ? data.filter((job) => job.category === selectedCategory)
  //   : data;

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Find Work</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-700 mt-2">{job.description}</p>
            <p className="text-green-600 font-semibold mt-1">
              Budget: {job.budget}
            </p>
            <p className="text-gray-600">Duration: {job.duration}</p>
            {job.postedAt && (
              <p className="text-gray-500 text-sm">
                Posted At: {new Date(job.postedAt).toLocaleDateString()}
              </p>
            )}
            {job.endDate && (
              <p className="text-gray-500 text-sm">Ends: {job.endDate}</p>
            )}

            <Link to={`/workdetails/${index}`}>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

// Loader to fetch jobs from backend
export const jobLoader = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/v1/jobs/findJobs"
    );
    return response.data;
  } catch (error) {
    console.log("Error loading data, using dummy jobs");
    return []; // fallback
  }
};

export default FindWork;
