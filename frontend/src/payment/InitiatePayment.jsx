import React from "react";

export default function InitiatePayment() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Initiate Payment
        </h2>

        {/* Payment Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-gray-600 mb-1">Job Title</label>
            <input
              type="text"
              placeholder="e.g. UI Design for Mobile App"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Freelancer Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Amount (INR)</label>
            <input
              type="number"
              placeholder="₹2000"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Date</label>
            <input
              type="date"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Payment Method
          </label>
          <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300">
            <option>Bank Transfer</option>
            <option>UPI</option>
            <option>Credit/Debit Card</option>
            <option>PayPal</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Send Payment
          </button>
        </div>
      </div>
    </section>
  );
}
