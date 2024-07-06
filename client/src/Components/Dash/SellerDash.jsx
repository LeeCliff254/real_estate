// DashboardWithForm.js

import React, { useState } from 'react';

const DashboardWithForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    property_type: '',
    bedrooms: '',
    bathrooms: '',
    square_footage: '',
    amenities: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending data to backend
    console.log(formData);

    // Reset form fields after submission
    setFormData({
      title: '',
      description: '',
      price: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      property_type: '',
      bedrooms: '',
      bathrooms: '',
      square_footage: '',
      amenities: '',
      images: [],
    });
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-200 w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard Menu</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block text-blue-600 hover:text-blue-800">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block text-blue-600 hover:text-blue-800">
              My Properties
            </a>
          </li>
          <li>
            <a href="#" className="block text-blue-600 hover:text-blue-800">
              Profile
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-4">Seller Dashboard</h2>

        {/* Property Form */}
        <div className="max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="input-field"
                />
              </div>
              {/* Repeat for other fields */}
            </div>

            {/* Image upload */}
            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                onChange={handleImageChange}
                multiple
                accept="image/*"
                className="input-field"
              />
            </div>

            {/* Submit button */}
            <div>
              <button type="submit" className="btn-primary mt-4">Submit</button>
            </div>
          </form>
        </div>

        {/* View Uploaded Properties Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">My Properties</h3>
          {/* Placeholder for displaying uploaded properties */}
          <div className="border p-4 rounded-lg bg-white">
            {/* Example property card */}
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Property"
                className="rounded-lg mr-4"
              />
              <div>
                <h4 className="font-semibold">Property Title</h4>
                <p className="text-gray-600">Address, City, State, Zip Code</p>
                <p className="text-gray-600">Price, Bedrooms, Bathrooms</p>
              </div>
            </div>
            {/* Add more property cards dynamically */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWithForm;