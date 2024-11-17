import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';  // Importing Toastify components
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify styles

const DetailsPages = () => {
  let { id } = useParams();
  let data = useLoaderData();
  let specificData = data.find((data) => data.id == id);

  // States for form fields
  const [quantity, setQuantity] = useState('');
  const [itemType, setItemType] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show a success toast message
    toast.success('Thank you! We will reach your destination soon.');

    // Clear form fields after submission
    setQuantity('');
    setItemType('');
    setPickupLocation('');
    setAdditionalNotes('');
  };

  return (
    <div>
      <div className="mx-auto p-6">
        {/* Display donation specificData details */}
        <div className="bg-white rounded-lg  p-6 mb-8 mx-auto">
          <img
            src={specificData.image}
            alt={specificData.title}
            className="w-96 mx-auto max-h-[400px] rounded-lg"
          />
          <div className="flex flex-col justify-center items-center">
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

      {/* Donation Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Donate Now</h3>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Quantity of Items</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
            placeholder="e.g., 2 jackets"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Item Type</label>
          <input
            type="text"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
            placeholder="e.g., blanket, jacket"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Pickup Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Additional Notes (Optional)</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
            placeholder="Any additional instructions"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Submit Donation
        </button>
      </form>

      {/* ToastContainer to display the toast messages */}
      <ToastContainer />
    </div>
  );
};

export default DetailsPages;
