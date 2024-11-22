import React from 'react';
import img1 from "../assets/col.jpeg"
import img2 from "../assets/donateM.jpg"
import img3 from "../assets/vol.jpeg"

const HowToHelp = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-primary my-6">
        How to Help
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Option 1 */}
        <div className="card bg-base-100 shadow-xl h-96 p-5">
          <figure>
            <img
              src={img1}
              alt="Donate Clothes"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Donate Clothes</h2>
            <p>
              Provide warm clothes to those in need during the winter. Every
              donation makes a difference.
            </p>
          </div>
        </div>
        {/* Option 2 */}
        <div className="card bg-base-100 shadow-xl h-96 p-5">
          <figure>
            <img
              src={img2}
              alt="Donate Money"
              className="w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Donate Money</h2>
            <p>
              Support our campaign financially to help us reach more people in
              need.
            </p>
          </div>
        </div>
        {/* Option 3 */}
        <div className="card bg-base-100 shadow-xl h-96 p-5">
          <figure>
            <img
              src={img3}
              alt="Volunteer"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Volunteer</h2>
            <p>
              Join our team to distribute donations and support the campaign on
              the ground.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
