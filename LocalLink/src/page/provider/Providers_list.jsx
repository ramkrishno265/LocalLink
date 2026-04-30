import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating || 0);

  return (
    <div className="flex justify-center text-yellow-400 text-lg">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < fullStars ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // 🔹 Load from DB
  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("services")
        .select("*");

      if (!error) {
        setProviders(data || []);
      } else {
        console.log(error.message);
      }

      setLoading(false);
    };

    fetchProviders();
  }, []);

  // 🔍 Filter logic
  const filtered = providers.filter((p) => {
    return (
      (p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.location?.toLowerCase().includes(search.toLowerCase())) &&
      (category === "All" || p.service_type === category)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 md:px-20 py-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
        Service Providers
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Find trusted professionals near you
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

        <input
          type="text"
          placeholder="Search by name or location..."
          className="px-4 py-3 rounded-xl border shadow-sm w-full md:w-1/3 focus:ring-2 focus:ring-purple-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-3 rounded-xl border shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Electrician</option>
          <option>Plumber</option>
          <option>Tutor</option>
          <option>Technician</option>
        </select>

      </div>

      {/* Loading */}
      {loading ? (
        <p className="text-center text-gray-500">Loading providers...</p>
      ) : (

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden group"
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={
                    p.image ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                  alt={p.name}
                />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {p.service_type}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 text-center">

                {/* Profile Name */}
                <h2 className="text-lg font-semibold text-gray-800">
                  {p.name}
                </h2>

                {/* Location */}
                <p className="text-sm text-gray-500 mt-1">
                  📍 {p.location}
                </p>

                {/* Experience */}
                <p className="text-sm text-gray-600 mt-1">
                  ⏳ {p.experience}
                </p>

                {/* ⭐ Rating */}
                <div className="mt-2">
                  <Stars rating={p.rating || 4.5} />
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">

                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    View Profile
                  </button>

                  <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-lg text-sm hover:bg-purple-50 transition">
                    Contact
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Providers;