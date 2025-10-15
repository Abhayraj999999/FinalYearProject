import React from "react";

const Applications = () => {
  const applications = [
    {
      id: 1,
      jobTitle: "Build a Portfolio Website",
      freelancerName: "Ravi Sharma",
      bidAmount: 4500,
      coverLetter:
        "I have 2+ years of experience in web development. I can build a modern, responsive website...",
      status: "Pending",
    },
    {
      id: 2,
      jobTitle: "Logo Design for Startup",
      freelancerName: "Simran Kaur",
      bidAmount: 2500,
      coverLetter:
        "I specialize in modern logos. I’ll provide 3 design options and unlimited revisions...",
      status: "Accepted",
    },
    {
      id: 3,
      jobTitle: "Content Writing for Blog",
      freelancerName: "Amit Verma",
      bidAmount: 3000,
      coverLetter:
        "Experienced content writer with 100+ articles published. SEO-focused writing...",
      status: "Rejected",
    },
  ];

  const statusColor = {
    Pending: "bg-yellow-100 text-yellow-800",
    Accepted: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 font-inter">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Applications
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border">
            <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
              <tr>
                <th className="px-4 py-3 border">Job Title</th>
                <th className="px-4 py-3 border">Freelancer</th>
                <th className="px-4 py-3 border">Bid Amount</th>
                <th className="px-4 py-3 border">Cover Letter</th>
                <th className="px-4 py-3 border">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border">{app.jobTitle}</td>
                  <td className="px-4 py-3 border">{app.freelancerName}</td>
                  <td className="px-4 py-3 border">₹{app.bidAmount}</td>
                  <td className="px-4 py-3 border">{app.coverLetter}</td>
                  <td className="px-4 py-3 border">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColor[app.status]
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-400 font-medium"
                  >
                    No applications yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Applications;
