import React from "react";
import img from "../assets/w3.jpg"
import img1 from "../assets/w5.jpg"
import img2 from "../assets/w6.jpeg"

const ImpactStories = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-4xl font-extrabold text-gray-600">
          Impact Stories
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">
          See how your donations are making a difference in the lives of those
          in need.
        </p>
      </div>

      {/* Stories Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Story 1 */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <img
            src={img}
            alt="Story 1"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-700">
            Ayesha's Warm Winter
          </h3>
          <p className="mt-2 text-gray-600">
            "Thanks to your donations, my family received warm clothes for the
            first time. We feel blessed and thankful for this support."
          </p>
        </div>

        {/* Story 2 */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <img
            src={img1}
            alt="Story 2"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-700">
            Hope for Hasan
          </h3>
          <p className="mt-2 text-gray-600">
            "The donations brought hope to our village during a harsh winter.
            Thank you for your kindness!"
          </p>
        </div>

        {/* Story 3 */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <img
            src={img2}
            alt="Story 3"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-700">
            A Grateful Heart
          </h3>
          <p className="mt-2 text-gray-600">
            "Your efforts made a real difference. My children can now attend
            school comfortably even in the cold."
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-blue-700">
          Be a Part of Their Story
        </h3>
        <p className="mt-4 text-gray-600 text-lg font-bold">
          Your donations can bring warmth and smiles to even more people.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default ImpactStories;
