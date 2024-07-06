// ClientDashboard.js

import React, { useState, useEffect } from 'react';

const ClientDash = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(''); // For sorting options

  useEffect(() => {
    // Simulated data fetching
    const fetchProperties = async () => {
      // Replace with actual API call to fetch properties
      const response = await fetch('https://api.example.com/properties');
      const data = await response.json();
      setProperties(data);
      setFilteredProperties(data); // Initially set filtered properties to all properties
    };

    fetchProperties();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterProperties(e.target.value);
  };

  const filterProperties = (term) => {
    const filtered = properties.filter(property =>
      property.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortBy(option);
    sortProperties(option);
  };

  const sortProperties = (option) => {
    let sortedProperties = [...filteredProperties];
    switch (option) {
      case 'price-low-high':
        sortedProperties.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProperties.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for default case (no sorting)
        break;
    }
    setFilteredProperties(sortedProperties);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-8">Explore Properties</h2>

      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* Search bar */}
        <div className="max-w-lg mb-4 md:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by property title"
            className="input-field"
          />
        </div>

        {/* Sort dropdown */}
        <div className="max-w-xs">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="select-field"
          >
            <option value="">Select...</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Featured Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 6).map(property => (
            <div key={property.id} className="border rounded-lg overflow-hidden bg-white">
              <img
                src={property.images[0]}
                alt={property.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.address}, {property.city}, {property.state}, {property.zip_code}</p>
                <p className="text-gray-600 mb-2">{property.bedrooms} BR | {property.bathrooms} BA | {property.square_footage} Sqft</p>
                <p className="text-gray-600 mb-2">${property.price}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Listings */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">All Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div key={property.id} className="border rounded-lg overflow-hidden bg-white">
              <img
                src={property.images[0]}
                alt={property.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.address}, {property.city}, {property.state}, {property.zip_code}</p>
                <p className="text-gray-600 mb-2">{property.bedrooms} BR | {property.bathrooms} BA | {property.square_footage} Sqft</p>
                <p className="text-gray-600 mb-2">${property.price}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientDash;
