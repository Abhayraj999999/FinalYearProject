import React from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaFileContract,
  FaMoneyBillWave,
  FaStar,
  FaSuitcase,
} from "react-icons/fa";

const ClientDashboard = () => {
  const actions = [
    {
      icon: <FaSuitcase className="text-3xl text-blue-600" />,
      title: "Post a Job",
      description: "Start a new project by posting a job.",
      link: "/post-job",
    },
    {
      icon: <FaClipboardList className="text-3xl text-blue-600" />,
      title: "View Applications",
      description: "Manage freelancer applications for your jobs.",
      link: "/applications",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
      title: "Manage Payments",
      description: "View and manage your payments.",
      link: "/payments",
    },
    {
      icon: <FaFileContract className="text-3xl text-blue-600" />,
      title: "Project Agreements",
      description: "View your signed project agreements.",
      link: "/project-agreements",
    },
    {
      icon: <FaStar className="text-3xl text-blue-600" />,
      title: "Reviews",
      description: "Leave and manage freelancer reviews.",
      link: "/reviews",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Welcome, Client
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

export default ClientDashboard;
