import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import reviewService from "../services/reviewService";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    freelancerId: "",
    rating: "",
    comment: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const fetchReviews = async () => {
    try {
      const data =
        user.role === "freelancer"
          ? await reviewService.getReviewsForFreelancer(user.id)
          : await reviewService.getAllFreelancers(); // For client to select from
      setReviews(data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await reviewService.leaveReview({
        ...formData,
        clientId: user.id,
      });
      setSuccess("Review submitted successfully!");
      setFormData({ freelancerId: "", rating: "", comment: "" });
      fetchReviews();
    } catch (err) {
      setError("Failed to submit review.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {user.role === "client" ? "Leave a Review" : "Reviews Received"}
        </h2>

        {user.role === "client" && (
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <select
              name="freelancerId"
              value={formData.freelancerId}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none"
            >
              <option value="">Select Freelancer</option>
              {reviews.map((freelancer) => (
                <option key={freelancer.id} value={freelancer.id}>
                  {freelancer.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Rating (1-5)"
              min="1"
              max="5"
              required
              className="w-full border p-2 rounded"
            />

            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Write your review..."
              rows={3}
              required
              className="w-full border p-2 rounded"
            ></textarea>

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Submit Review
            </button>

            {success && (
              <p className="text-green-600 text-sm mt-2">{success}</p>
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        )}

        {user.role === "freelancer" && (
          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gray-50 p-4 rounded shadow-sm"
                >
                  <p className="font-semibold text-gray-800">
                    Rating: {review.rating}/5
                  </p>
                  <p className="text-gray-700 mt-1">{review.comment}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    By {review.clientName}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">No reviews yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
