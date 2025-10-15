import React from "react";

const Enterprise = () => {
  return (
    <section className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          SkillHub Enterprise Solutions
        </h1>
        <p className="text-gray-600 mb-8">
          Scale your business with our end-to-end freelance workforce
          management. Trusted by companies of all sizes to access top-tier
          talent globally.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Custom Hiring Solutions
            </h2>
            <p className="text-gray-700">
              Let us help you hire teams at scale with dedicated account
              managers and custom onboarding solutions.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Talent Matching</h2>
            <p className="text-gray-700">
              Get matched with the right freelancers from our vetted talent pool
              for any project size or skill set.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Secure Workflow</h2>
            <p className="text-gray-700">
              From contract generation to milestone tracking and payment,
              SkillHub offers an enterprise-grade workflow.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Contact Our Enterprise Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
