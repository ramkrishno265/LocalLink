import React from "react";
import { useNavigate } from "react-router-dom";

const ProviderDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Provider Dashboard
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Add Service Card */}
        <div
          onClick={() => navigate("/provider/add-service")}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition duration-300"
        >
          <h2 className="text-xl font-semibold mb-2">➕ Add New Service</h2>
          <p className="text-gray-500">
            Click here to add your service details like name, category, phone, location.
          </p>
        </div>

        {/* My Services Card */}
        <div
          onClick={() => navigate("/provider/my-services")}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition duration-300"
        >
          <h2 className="text-xl font-semibold mb-2">📋 My Services</h2>
          <p className="text-gray-500">
            View, edit or delete your previously added services.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProviderDashboard;