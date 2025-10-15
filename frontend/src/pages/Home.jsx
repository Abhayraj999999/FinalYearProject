import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const backgroundImages = [
  "/assets/freelance1.avif",
  "/assets/freelance2.jpeg",
  "/assets/freelance3.jpeg",
  "/assets/freelance4.jpeg",
  "/assets/freelance5.avif",
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/find-work?category=${encodeURIComponent(category)}`);
  };

  const isLoggedIn = true;
  const userRole = "client";
  const handleStartedToday = () => {
    if (!isLoggedIn) {
      navigate("/register");
    } else if (userRole === "client") {
      navigate("/post-job");
    } else {
      navigate("/find-work");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Every 1 second

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div
          className="bg-white rounded-lg shadow-md p-8 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages[currentIndex]})`,
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with top talent and find your next opportunity
          </h1>
          <p className="mb-6 text-gray-600">
            Millions of people use Connect to turn their ideas into reality.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to={`/post-job`}
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
            >
              Post a Job
            </Link>
            <Link
              to={`/find-work`}
              className="bg-gray-200 px-5 py-2 rounded-md hover:bg-gray-300"
            >
              Find Work
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* For Clients */}
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2">For Clients</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>📄 Post a Job</li>
              <li>🔍 Review Proposals</li>
              <li>✅ Select and Hire</li>
            </ul>
          </div>

          {/* For Freelancers */}
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2">For Freelancers</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>🔍 Find Projects</li>
              <li>📨 Submit Proposals</li>
              <li>💰 Get Paid</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Web Development",
            "Graphic Design",
            "Content Writing",
            "Digital Marketing",
            "Mobile App Development",
            "Video Editing",
          ].map((category) => (
            <button
              onClick={() => handleClick(category)}
              key={category}
              className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-md shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              jobId: 1,
              title: "Web Development Project",
              desc: "Build a responsive website",
              image: "/assets/web.png",
            },
            {
              jobId: 2,
              title: "Graphic Design Project",
              desc: "Design a logo and brand identity",
              image: "/assets/writing.jpeg",
            },
            {
              jobId: 3,
              title: "Content Writing Project",
              desc: "Write blog posts and articles",
              image: "/assets/design.jpeg",
            },
          ].map((job) => (
            <Link
              to={`/workdetails/${job.jobId}`}
              key={job.title}
              className="bg-white rounded shadow p-4"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-md">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Freelancers */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Top Freelancers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              name: "Sophia",
              title: "Web Developer",
              desc: "Expert in front-end development",
              image: "assets/avtar1.png",
            },
            {
              id: 2,
              name: "Ethan",
              title: "Graphic Designer",
              desc: "Creative and innovative designs",
              image: "assets/avtar2.png",
            },
            {
              id: 3,
              name: "Olivia",
              title: "Content Writer",
              desc: "Engaging and SEO-friendly content",
              image: "assets/avtar3.png",
            },
          ].map((freelancer) => (
            <Link
              to={`/freelancer/${freelancer.id}`}
              key={freelancer.name}
              className="bg-white p-4 rounded shadow text-center"
            >
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
              />
              <h4 className="font-semibold">{freelancer.name}</h4>
              <p className="text-sm text-gray-600">{freelancer.title}</p>
              <p className="text-xs text-gray-500">{freelancer.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Secure Payments",
              desc: "Timely payments for all projects.",
            },
            {
              title: "Vetted Talent",
              desc: "We verify freelancers for quality.",
            },
            {
              title: "Flexible Hours",
              desc: "Work your own schedule remotely.",
            },
          ].map((feature) => (
            <Link
              to="/why-skillhub"
              key={feature.title}
              className="bg-white p-4 rounded shadow text-center"
            >
              <h4 className="font-semibold mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Client Testimonials</h2>
        <div className="space-y-6">
          {[
            {
              name: "Liam Carter",
              date: "2023-08-15",
              review: "Exceptional work within the deadline. Highly recommend!",
              rating: 5,
            },
            {
              name: "Ava Harper",
              date: "2023-07-20",
              review:
                "Great selection of talented freelancers. Very satisfied.",
              rating: 4,
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white p-4 rounded shadow flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-gray-500 mb-2">{t.date}</p>
                <p className="text-sm text-gray-700">{t.review}</p>
              </div>
              <p className="text-yellow-500 font-bold text-xl">
                {"★".repeat(t.rating)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <button
          onClick={handleStartedToday}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default Home;
