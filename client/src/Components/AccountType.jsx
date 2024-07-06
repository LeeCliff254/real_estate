import React, { useState } from 'react';

const AccountType = () => {
  const [userType, setUserType] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="userType" className="sr-only">
                Are you a property seeker, individual buyer, or agent?
              </label>
              <select
                id="userType"
                name="userType"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setUserType(e.target.value)}
                value={userType}
                required
              >
                <option value="">Select your user type</option>
                <option value="property_seeker">Property Seeker</option>
                <option value="individual_buyer">Individual Buyer</option>
                <option value="agent">Agent</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountType;