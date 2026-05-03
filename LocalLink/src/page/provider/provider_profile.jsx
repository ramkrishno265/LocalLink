import React from "react";
import { useNavigate } from "react-router-dom";

const ProviderProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      {/* MAIN PROFILE CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* 📸 PROFILE IMAGE */}
          <div className="w-full md:w-1/3">

            <div className="w-full h-72 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">

              {/* image placeholder */}
              <span className="text-gray-500">
                Profile Image
              </span>

            </div>

          </div>

          {/* 🧑 INFO SECTION */}
          <div className="flex-1">

            {/* NAME */}
            <h1 className="text-3xl font-bold text-gray-800">
              Provider Name
            </h1>

            {/* LOCATION */}
            <p className="text-gray-500 mt-2">
              📍 Location will show here
            </p>

            {/* PHONE */}
            <p className="text-gray-500">
              📞 Phone number
            </p>

            {/* EXPERIENCE + RATING */}
            <div className="flex gap-4 mt-4">

              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
                ⭐ Experience: 0 yrs
              </div>

              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-lg">
                ⭐ Rating: 0/5
              </div>

            </div>

            {/* SERVICES TAGS */}
            <div className="flex flex-wrap gap-2 mt-5">

              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Service 1
              </span>

              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Service 2
              </span>

              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Service 3
              </span>

            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-3">

              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Contact Provider
              </button>

              <button className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300">
                Save
              </button>

            </div>

          </div>
        </div>

      </div>

      {/* SERVICES SECTION */}
      <div className="max-w-5xl mx-auto mt-8">

        <h2 className="text-xl font-semibold mb-4">
          Services Provided
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-white p-4 rounded-2xl shadow">

            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Service Image
            </div>

            <h3 className="text-lg font-semibold mt-3">
              Service Name
            </h3>

            <p className="text-gray-500 text-sm">
              Short description here...
            </p>

            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
              View Details
            </button>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Service Image
            </div>
            <h3 className="text-lg font-semibold mt-3">
              Service Name
            </h3>
            <p className="text-gray-500 text-sm">
              Short description here...
            </p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
              View Details
            </button>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Service Image
            </div>
            <h3 className="text-lg font-semibold mt-3">
              Service Name
            </h3>
            <p className="text-gray-500 text-sm">
              Short description here...
            </p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
              View Details
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProviderProfile;