import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import paymentService from "../services/paymentService";

const Payments = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response =
          user.role === "client"
            ? await paymentService.getPaymentsByClient(user.id)
            : await paymentService.getPaymentsByFreelancer(user.id);

        setPayments(response);
      } catch (err) {
        console.error("Error fetching payments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {user.role === "client" ? "Payments Made" : "Payments Received"}
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading payments...</p>
        ) : payments.length === 0 ? (
          <p className="text-center text-gray-600">No payment records found.</p>
        ) : (
          <div className="space-y-4">
            {payments.map((pay) => (
              <div
                key={pay.id}
                className="border p-4 rounded-md shadow-sm bg-gray-50 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{pay.jobTitle}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {user.role === "client"
                      ? `Paid to: ${pay.freelancerName}`
                      : `Received from: ${pay.clientName}`}
                  </p>
                </div>
                <div className="text-green-600 font-bold text-lg">
                  ₹{pay.amount}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;
