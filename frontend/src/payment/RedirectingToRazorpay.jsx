import React, { useEffect } from "react";

const RedirectingToRazorpay = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate redirect to Razorpay
      window.location.href = "https://razorpay.com"; // Replace with actual Razorpay checkout URL
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20 font-inter text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        You'll be redirected to Razorpay to complete your payment
      </h1>
      <p className="text-gray-600 mb-6">
        You'll be redirected to Razorpay to complete your payment. This may take
        a few seconds.
      </p>

      <div className="text-left max-w-xl mx-auto mt-10">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Redirecting to Razorpay
        </p>
        <div className="w-full h-2 bg-gray-200 rounded">
          <div
            className="h-full bg-blue-600 rounded transition-all duration-500 animate-pulse"
            style={{ width: "50%" }}
          />
        </div>
        <p className="text-sm text-blue-600 mt-4 underline">
          <a
            href="https://razorpay.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            If you are not redirected in 5 seconds, please click here to
            continue to Razorpay
          </a>
        </p>
      </div>
    </div>
  );
};

export default RedirectingToRazorpay;
