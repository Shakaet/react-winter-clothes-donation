import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-4xl font-extrabold text-gray-600">
          How It Works
        </h2>
        <p className="mt-4 text-lg sm:text-xl font-bold text-gray-700">
          Follow these simple steps to donate and help those in need this winter.
        </p>
      </div>

      {/* Steps Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 text-center ">
        {/* Step 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 ">
          <div className="text-blue-600 text-4xl mb-4">📥</div>
          <h3 className="text-xl  text-blue-700 font-bold">Step 1: Register</h3>
          <p className="mt-2 text-gray-600 font-bold">
            Create an account and browse our donation campaigns.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-blue-600 text-4xl mb-4">🎁</div>
          <h3 className="text-xl font-bold text-blue-700">Step 2: Donate</h3>
          <p className="mt-2 text-gray-600 font-bold">
            Fill out the donation form and drop off your items at our collection points.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-blue-600 text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-blue-700">Step 3: Make an Impact</h3>
          <p className="mt-2 text-gray-600 font-bold">
            Your donations are distributed to those in need across supported divisions.
          </p>
        </div>
      </div>

      {/* Collection Points Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-extrabold text-blue-600 text-center">
          Collection Points
        </h3>
        <p className="mt-4 text-gray-700 text-center font-bold">
          Drop off your donations at any of our conveniently located collection points.
        </p>
        <ul className="mt-6 space-y-4 text-gray-700 font-bold md:columns-2 lg:columns-3">
          <li>🏢 Dhaka: 123 Main Street, Gulshan</li>
          <li>🏢 Chittagong: 456 Bay View Road, Agrabad</li>
          <li>🏢 Rajshahi: 789 Mango Lane, Boalia</li>
          <li>🏢 Sylhet: 101 Tea Estate Drive, Mirabazar</li>
          <li>🏢 Khulna: 202 Sundarbans Road, Sonadanga</li>
          <li>🏢 Barisal: 303 Riverfront Avenue, Sadar Road</li>
        </ul>
      </div>

      {/* Supported Divisions Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-blue-600 text-center">
          Supported Divisions
        </h3>
        <p className="mt-4 text-gray-700 text-center font-bold">
          We’re working across these divisions to bring warmth to those in need.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Dhaka",
            "Chittagong",
            "Rajshahi",
            "Sylhet",
            "Khulna",
            "Barisal",
            "Rangpur",
            "Mymensingh",
          ].map((division, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-700 font-semibold py-3 rounded-lg shadow-md text-center"
            >
              {division}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
