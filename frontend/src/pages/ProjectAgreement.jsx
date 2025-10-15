import React from "react";

const ProjectAgreement = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Project Agreement
          </h1>
          <p className="text-gray-600">Between Client and Freelancer</p>
        </div>

        {/* Project Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Project Title
          </h2>
          <p className="text-gray-800">
            Landing Page Development for Product Launch
          </p>
        </div>

        {/* Terms Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Agreement Terms
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>
              Client agrees to pay ₹10,000 upon successful project completion.
            </li>
            <li>
              Freelancer will deliver the project within 5 days of start date.
            </li>
            <li>All communication must remain on platform for security.</li>
            <li>
              Any breach of agreement may result in cancellation of project.
            </li>
            <li>
              Ownership of code will transfer to client after payment is
              released.
            </li>
          </ul>
        </div>

        {/* Milestones */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-gray-800">Milestone 1</h3>
              <p className="text-sm text-gray-600">UI Completion – ₹4000</p>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-gray-800">Milestone 2</h3>
              <p className="text-sm text-gray-600">Functionality – ₹6000</p>
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Client Signature
            </label>
            <input
              type="text"
              placeholder="Client Name"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Freelancer Signature
            </label>
            <input
              type="text"
              placeholder="Freelancer Name"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
        </div>

        {/* Confirmation Button */}
        <div className="text-center">
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
            Confirm Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectAgreement;
