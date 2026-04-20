import React, { useState } from "react";

const providers = [
  {
    fullName: "Rahim Uddin",
    firstName: "Rahim",
    category: "Electrician",
    location: "Dhaka",
    rating: 4.8,
    desc: "Expert in home wiring and electrical repairs.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    fullName: "Karim Hasan",
    firstName: "Karim",
    category: "Plumber",
    location: "Gazipur",
    rating: 4.6,
    desc: "Professional plumber for pipe and leak solutions.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    fullName: "Sadia Akter",
    firstName: "Sadia",
    category: "Tutor",
    location: "Uttara",
    rating: 4.9,
    desc: "Experienced tutor for Math and Science.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },

  // auto generate rest
  ...Array.from({ length: 27 }, (_, i) => ({
    fullName: `Provider ${i + 4}`,
    firstName: `Name${i + 4}`,
    category: ["Electrician", "Plumber", "Tutor", "Technician"][i % 4],
    location: ["Dhaka", "Uttara", "Mirpur", "Banani"][i % 4],
    rating: (4 + Math.random()).toFixed(1),
    desc: "Reliable and experienced service provider.",
    img: `https://randomuser.me/api/portraits/men/${i + 4}.jpg`,
  })),
];

// ⭐ Star component
const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex justify-center text-yellow-500">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>
          {i < fullStars ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

const Providers = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Filter logic
  const filtered = providers.filter((p) => {
    return (
      (p.fullName.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())) &&
      (category === "All" || p.category === category)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-56 py-10">

      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Service Providers
      </h1>

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">

        <input
          type="text"
          placeholder="Search by name or location..."
          className="px-4 py-2 rounded-lg border w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-lg border"
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

      {/* Cards */}
      <div className="grid md:grid-cols-5 gap-6">

        {filtered.map((p, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
          >

            <img
              src={p.img}
              alt={p.fullName}
              className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-purple-200"
            />

            <h2 className="mt-3 font-semibold text-gray-800">
              {p.fullName}
            </h2>

            <p className="text-purple-600 text-sm">
              ({p.firstName})
            </p>

            <p className="text-gray-500 text-sm mt-1">
              {p.category}
            </p>

            <p className="text-gray-400 text-xs">
              📍 {p.location}
            </p>

            <p className="text-gray-600 text-sm mt-2">
              {p.desc}
            </p>

            {/* ⭐ Stars */}
            <Stars rating={p.rating} />

            <button className="mt-3 bg-purple-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-purple-700">
              View Profile
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Providers;