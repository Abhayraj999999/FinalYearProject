import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 font-inter">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Payment successful
        </h1>
        <p className="text-gray-600 mb-6">
          Your payment of <strong>$19.99</strong> for{" "}
          <strong>'Mastering Python Programming'</strong> has been successfully
          processed. You can now access the course materials and start learning.
        </p>

        <div className="w-full rounded overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60"
            alt="Course artwork"
            className="w-full object-cover rounded"
          />
        </div>

        <div className="text-left text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-y-4">
            <span className="font-semibold">Course</span>
            <span>Mastering Python Programming</span>

            <span className="font-semibold">Amount</span>
            <span>$19.99</span>

            <span className="font-semibold">Payment method</span>
            <span>Razorpay</span>

            <span className="font-semibold">Transaction ID</span>
            <span>TXN1234567890</span>

            <span className="font-semibold">Date</span>
            <span>July 26, 2024</span>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold">
            Go to course
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
