import React from 'react';

import img3 from '../assets/donation3.jpg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/winter.png'

const Banner = () => {
  return (
    <div className="carousel w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-b from-blue-500 to-blue-300">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img3}
          alt="Community Support"
          className="w-full h-full"
        />
        <div className="absolute flex items-center justify-center h-full w-full bg-blue-800 bg-opacity-50 px-4">
          <div className="text-center text-white font-bold max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Support Local Communities
            </h1>
            <p className="mt-4 text-sm sm:text-lg md:text-xl">
              Your donations can bring warmth and comfort to families in need this winter.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-full shadow-md hover:bg-blue-100">
              Donate Now
            </button>
          </div>
        </div>
        <a href="#slide3" className="btn btn-circle absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2">
          ❯
        </a>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img5}
          alt="Donation Campaign"
          className="w-full h-full"
        />
        <div className="absolute flex items-center justify-center h-full w-full bg-blue-900 bg-opacity-60 px-4">
          <div className="text-center text-white font-bold max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Join Our Winter Campaigns
            </h1>
            <p className="mt-4 text-sm sm:text-lg md:text-xl">
              Together, we can make this winter warmer for everyone.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-full shadow-md hover:bg-blue-100">
              Get Involved
            </button>
          </div>
        </div>
        <a href="#slide1" className="btn btn-circle absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2">
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2">
          ❯
        </a>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img4}
          alt="Clothing Drive"
          className="w-full h-full "
        />
        <div className="absolute flex items-center justify-center h-full w-full bg-blue-700 bg-opacity-50 px-4">
          <div className="text-center text-white font-bold max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Clothing Drive for the Needy
            </h1>
            <p className="mt-4 text-sm sm:text-lg md:text-xl">
              Donate your unused winter clothes to bring smiles this season.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-full shadow-md hover:bg-blue-100">
              Learn More
            </button>
          </div>
        </div>
        <a href="#slide2" className="btn btn-circle absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2">
          ❮
        </a>
        <a href="#slide1" className="btn btn-circle absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Banner;
