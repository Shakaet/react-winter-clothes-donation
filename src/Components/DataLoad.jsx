import React from 'react';
import { Link } from 'react-router-dom';

const DataLoad = ({ data }) => {
    
  return (
    <div className="flex justify-center">
      <div
        className="bg-white rounded-lg shadow-lg flex flex-col min-h-[400px] mt-10"
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between p-6 h-full">
          <h3 className="text-xl font-semibold text-blue-700">{data.title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{data.description}</p>
          <p className="mt-4 text-sm text-gray-700 font-semibold">
            Division: <span className="text-blue-600">{data.division}</span>
          </p>
          <Link to={`/donation/${data.id}`} className="mt-6 px-4 py-2 ,mx-auto w-full bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataLoad;




