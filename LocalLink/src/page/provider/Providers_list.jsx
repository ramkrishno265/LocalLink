import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // 🔹 Load providers + categories
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("services")
        .select("*");

      console.log("DATA:", data);
      

      if (!error) {
        setProviders(data || []);

        // 🔥 unique service types
        const uniqueCategories = [
          ...new Set((data || []).map((item) => item.service_type))
        ];

        setCategories(uniqueCategories);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  // 🔍 Safe filter
  const filtered = (providers || []).filter((p) => {
    return (
      (p?.name?.toLowerCase().includes(search.toLowerCase()) ||
        p?.location?.toLowerCase().includes(search.toLowerCase())) &&
      (category === "All" || p?.service_type === category)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-[350px] py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-2">
        Service Providers
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Find trusted professionals near you
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">

        <input
          type="text"
          placeholder="Search by name or location..."
          className="px-4 py-3 border rounded-lg w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Dynamic category dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-3 border rounded-lg"
        >
          <option value="All">All</option>

          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
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
              className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 text-center"
            >

              {/* Profile Image */}
              <img
                src={
                  p.image ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                className="w-full h-40 rounded-xl mx-auto object-cover object-top border-2 border-purple-100"
              />

              {/* Name */}
              <h2 className="text-lg font-bold mt-2">
                {p.name}
              </h2>

              {/* Service Type */}
              <p className="text-purple-600 text-sm">
                {p.service_type}
              </p>

              {/* Location */}
              <p className="text-gray-500 text-sm">
                📍 {p.location}
              </p>

              {/* Phone */}
              <p className="text-gray-700 text-sm">
                📞 {p.phone}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">

                <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700">
                  View Profile
                </button>

                <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-lg text-sm hover:bg-purple-50">
                  Contact
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Providers;