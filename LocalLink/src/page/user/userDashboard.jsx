import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [services, setServices] = useState([]);

  // 🔹 Load user + services
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      // Profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(profileData);

      // All services (for user to browse)
      const { data: serviceData } = await supabase
        .from("services")
        .select("*");

      setServices(serviceData || []);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔵 Top Bar */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          User Dashboard
        </h1>

        <button
          onClick={() => supabase.auth.signOut().then(() => navigate("/login"))}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="p-6 max-w-6xl mx-auto">

        {/* 👤 Profile Section */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {profile?.name || "User"}
          </h2>
          <p className="text-gray-500">{profile?.email}</p>

          <span className="inline-block mt-2 px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            {profile?.role}
          </span>
        </div>

        {/* 🔍 Search Bar (UI only) */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* ⚡ Services List */}
        <h2 className="text-lg font-semibold mb-4">
          Available Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {service.service_name}
              </h3>

              <p className="text-gray-500 mt-1">
                📂 {service.category}
              </p>

              <p className="text-gray-500">
                📍 {service.location}
              </p>

              <p className="text-gray-500">
                📞 {service.phone}
              </p>

              <p className="text-gray-500">
                ⭐ Experience: {service.experience} years
              </p>

              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                Contact Provider
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default UserDashboard;