import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const FindTalent = () => {
  const freelancers = useLoaderData();
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Find Talent</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {freelancers.map((freelancer, index) => (
          <Link
            to={`/freelancer/${freelancer.id}`}
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={freelancer.image}
              alt={freelancer.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{freelancer.name}</h3>
            <p className="text-gray-500">{freelancer.profileTitle}</p>
            <p className="text-yellow-500">⭐ {freelancer.profileDesc}</p>
            <p className="font-medium mt-2">--</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
export const freelancerLoader = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8081/api/v1/freelancers/findFreelancers"
    );
    return response.data;
  } catch (error) {
    console.log("error loading freealncers, using dummy data");
    return [];
  }
};
export default FindTalent;
