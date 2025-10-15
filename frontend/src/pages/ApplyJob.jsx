import React, { useState } from "react";

const ApplyJob = () => {
  const [coverLetter, setCoverLetter] = useState("");
  const [bidAmount, setBidAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add apply job logic here
    console.log("Bid Submitted:", { coverLetter, bidAmount });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 font-inter">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Apply to This Job
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cover Letter */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Cover Letter
            </label>
            <textarea
              rows="6"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write a compelling cover letter..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Bid Amount */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Bid Amount (in ₹)
            </label>
            <input
              type="number"
              min="0"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your bid (e.g., 5000)"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
            >
              Submit Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
