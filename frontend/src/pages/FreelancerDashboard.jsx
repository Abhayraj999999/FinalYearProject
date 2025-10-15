import React from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardCheck,
  FaMoneyCheckAlt,
  FaFileContract,
  FaStar,
  FaSuitcase,
} from "react-icons/fa";

const FreelancerDashboard = () => {
  const actions = [
    {
      icon: <FaSuitcase className="text-3xl text-green-600" />,
      title: "Browse Jobs",
      description: "Find freelance jobs that match your skills.",
      link: "/browse-jobs",
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-green-600" />,
      title: "My Applications",
      description: "View and manage jobs you've applied to.",
      link: "/applications",
    },
    {
      icon: <FaMoneyCheckAlt className="text-3xl text-green-600" />,
      title: "Earnings",
      description: "Track your payments and balance.",
      link: "/payments",
    },
    {
      icon: <FaFileContract className="text-3xl text-green-600" />,
      title: "Project Agreements",
      description: "Review signed contracts for your jobs.",
      link: "/project-agreements",
    },
    {
      icon: <FaStar className="text-3xl text-green-600" />,
      title: "Client Reviews",
      description: "Read reviews from your past clients.",
      link: "/reviews",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Welcome, Freelancer
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <Link
              to={action.link}
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {action.icon}
                <h2 className="text-xl font-semibold text-gray-800">
                  {action.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
