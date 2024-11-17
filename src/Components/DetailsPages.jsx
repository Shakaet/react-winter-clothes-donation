import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsPages = () => {

    let {id} = useParams()

    let data= useLoaderData()
    console.log(id)

    let specificData= data.find((data)=>data.id== id)
    console.log(specificData)

    return (
        <div>

<div className="mx-auto p-6">
      {/* Display donation specificData details */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 mx-auto">
        <img
          src={specificData.image}
          alt={specificData.title}
          className="w-96 mx-auto max-h-[400px] rounded-lg"
        />
       <div className='flex flex-col justify-center items-center'>
       <h3 className="text-xl font-semibold text-blue-700 mt-4">{specificData.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{specificData.description}</p>
        <p className="text-sm text-gray-700 font-semibold mt-4">
          Division: <span className="text-blue-600">{specificData.division}</span>
        </p>
        <p className="text-sm text-gray-700 mt-2">{specificData.contactInfo}</p>
        <p className="text-sm text-gray-700 mt-2">
          Status: <span className="text-green-600">{specificData.status}</span>
        </p>
       </div>
      </div>
            
        </div>

        </div>
    );
};

export default DetailsPages;