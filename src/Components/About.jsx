import React from "react";
import img from "../assets/donation2.webp"

const About = () => {
  return (

    <div className="bg-blue-50 py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-center text-5xl font-extrabold mb-20 mt-5 text-gray-600 animate__animated animate__backInRight">About</h1>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        <div className="">
          <img
            src={img}
            alt="Helping Hands"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Section: Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-700 font-bold text-lg sm:text-xl">
            At <span className="font-extrabold text-yellow-500">Winter Donation</span>, our goal
            is to provide warm clothing to those in need across Bangladesh.
            Thousands of people struggle to stay warm during the winter, and we
            aim to change that with your help.
          </p>
          <p className="mt-4 text-gray-700 font-bold text-lg sm:text-xl">
            By connecting donors with local volunteers, we ensure that every
            donation reaches the people who need it most. Together, we can make
            a difference this winter.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-blue-600">
              How You Can Contribute
            </h3>
            <ul className="mt-4 space-y-2  text-lg text-gray-500 font-bold">
              <li>🎁 Donate your unused winter clothing.</li>
              <li>🤝 Volunteer to distribute donations in your area.</li>
              <li>🌟 Spread the word about our mission.</li>
            </ul>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">
              Donate Now
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 font-bold rounded-lg shadow-md hover:bg-blue-100">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
