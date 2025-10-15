import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    budget: "",
    duration: "",
    description: "",
  });
  const { freelancerId } = useParams();
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("handle submit triggered");
    e.preventDefault();
    const newErrors = {};

    if (formData.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.budget || Number(formData.budget) <= 0) {
      newErrors.budget = "Budget must be a positive number";
    }

    if (!formData.duration || Number(formData.duration) <= 0) {
      newErrors.duration = "Duration must be at least 1 day";
    }

    if (formData.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters";
    }

    setErrors(newErrors);

    // ✅ Only submit if no errors
    console.log("about to submit form data");
    if (Object.keys(newErrors).length === 0) {
      try {
        console.log("Submitting form data");
        const payload = {
          title: formData.title,
          description: formData.description,
          budget: Number(formData.budget), // ✅ converts to number
          duration: Number(formData.duration), // ✅ converts to number
          // category is ignored unless you add it in JobDto + Job
        };
        const res = await axios.post(
          "http://localhost:8080/api/v1/jobs/saveJob",
          payload
        );
        console.log("submitted form data");
        toast.success("Job Posted Successfully");

        setFormData({
          title: "",
          category: "",
          budget: "",
          duration: "",
          description: "",
        });
      } catch (error) {
        toast.error("Failed to post job");
        console.log(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 font-inter">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Post a Job</h1>
        {freelancerId && (
          <div className="mb-4 text-center text-lg text-blue-700 font-semibold">
            You're hiring: Freelancer #{freelancerId}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter job title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select category</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="App Development">App Development</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget (INR)
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Enter your budget"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (Days)
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Expected duration"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.duration && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Describe the job requirements, skills needed, expectations..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
