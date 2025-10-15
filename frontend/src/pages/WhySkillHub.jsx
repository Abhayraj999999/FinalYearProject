import React from "react";

const WhySkillhub = () => {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose SkillHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">For Clients</h3>
            <p className="text-gray-700">
              SkillHub connects you with top freelancers from various domains.
              Get your work done faster, more affordably, and with reliable
              results.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">For Freelancers</h3>
            <p className="text-gray-700">
              Whether you're a student, part-time worker, or full-time
              freelancer, SkillHub offers a constant stream of projects tailored
              to your skills and interests.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Secure & Transparent</h3>
            <p className="text-gray-700">
              From secure payments to project milestones, our platform ensures
              fairness and transparency for all parties involved.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Join thousands using SkillHub
          </h3>
          <p className="text-gray-600">
            Be part of the growing SkillHub community and experience the future
            of freelancing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySkillhub;
