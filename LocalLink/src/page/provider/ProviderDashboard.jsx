import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const ProviderDashboard = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [serviceCount, setServiceCount] = useState(0);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  // 🔹 Load Profile + Services
  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(profileData);

      const { count } = await supabase
        .from("services")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id);

      setServiceCount(count || 0);
    };

    fetchData();
  }, []);

  // outside click close
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔵 HEADER */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Provider Dashboard
        </h1>

        {/* Profile */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={
                profile?.image ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              className="w-10 h-10 rounded-full border object-cover"
            />
            <span className="font-medium text-gray-700">Profile</span>
          </div>

          {open && (
            <div className="absolute right-0 mt-3 w-40 bg-white border rounded-lg shadow-lg">
              <button
                onClick={() => navigate("/profile")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                ⚙️ Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🔷 CONTENT */}
      <div className="p-6 max-w-6xl mx-auto">

        {/* 🟢 PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6 flex justify-between items-center hover:shadow-lg transition">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {profile?.name || "Loading..."}
            </h2>
            <p className="text-gray-500">{profile?.email}</p>

            <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
              {profile?.role}
            </span>
          </div>

          <div className="text-right">
            <p className="text-gray-500">Total Services</p>
            <h3 className="text-3xl font-bold text-blue-600">
              {serviceCount}
            </h3>
          </div>
        </div>

        {/* ⚡ QUICK ACTIONS */}
        <div className="grid md:grid-cols-2 gap-6">

          <div
            onClick={() => navigate("/provider/add-service")}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-2">
              ➕ Add New Service
            </h2>
            <p className="text-gray-500">
              Add your service with details & image.
            </p>
          </div>

          <div
            onClick={() => navigate("/provider/my-services")}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-2">
              📋 My Services
            </h2>
            <p className="text-gray-500">
              View, edit or delete your services.
            </p>
          </div>
        </div>

        {/* 📊 OVERVIEW */}
        <div className="mt-6 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            📌 Dashboard Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="text-gray-500">Active Services</p>
              <h3 className="text-xl font-bold text-blue-600">
                {serviceCount}
              </h3>
            </div>

            <div className="p-4 bg-green-50 rounded-xl">
              <p className="text-gray-500">Profile Status</p>
              <h3 className="text-xl font-bold text-green-600">
                Active
              </h3>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl">
              <p className="text-gray-500">Account Type</p>
              <h3 className="text-xl font-bold text-purple-600">
                Provider
              </h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProviderDashboard;