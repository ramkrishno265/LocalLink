import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [services, setServices] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Load user + data
  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await supabase.auth.getUser();

      const user = userData?.user;
      if (!user) return;

      // Profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(profileData);

      // Services
      const { data: serviceData } = await supabase
        .from("services")
        .select("*");

      setServices(serviceData || []);
    };

    fetchData();
  }, []);

  // 🔴 Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔵 TOP BAR */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-gray-800">
          User Dashboard
        </h1>

        {/* 👤 PROFILE MENU */}
        <div className="relative">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200"
          >
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-500 text-white flex items-center justify-center">

              {profile?.image ? (
                <img
                  src={profile.image}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                profile?.name?.charAt(0).toUpperCase() || "U"
              )}

            </div>

            <span className="font-medium">
              {profile?.name || "User"}
            </span>
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl overflow-hidden border z-50">

              <button
                onClick={() => navigate("/profile")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                ⚙️ Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
              >
                🚪 Logout
              </button>

            </div>
          )}

        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 max-w-6xl mx-auto">

        {/* 👤 PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {profile?.name || "User"}
          </h2>

          <p className="text-gray-500">{profile?.email}</p>

          <span className="inline-block mt-2 px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            {profile?.role}
          </span>
        </div>

        {/* 🔍 SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* ⚡ SERVICES */}
        <h2 className="text-lg font-semibold mb-4">
          Available Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition"
            >
              <img
                src={service.image}
                alt="service"
                className="w-full h-40 object-cover object-top rounded-lg"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                📂{service.service_type}
              </h3>

              <p className="text-gray-500 mt-1">
                🙎‍♂️ {service.name}
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

              <button
                onClick={() => navigate(`/provider/profile/${service.user_id}`)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                View Profile
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default UserDashboard;