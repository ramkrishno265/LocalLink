import React, { useEffect, useState } from "react";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  // 🔹 Fetch data
  useEffect(() => {
    fetch("http://localhost:5000/api/providers")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setFiltered(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // 🔹 Filter function
  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFiltered(services);
    } else {
      const result = services.filter(
        (item) => item.category === category
      );
      setFiltered(result);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Find Your Service
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Electrician", "Plumber", "AC Repair", "Cleaning"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-4 py-2 rounded-full shadow ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {item.name}
              </h2>

              <p className="text-gray-500">{item.category}</p>
              <p className="text-gray-500">📍 {item.location}</p>
              <p className="text-gray-500">📞 {item.phone}</p>
              <p className="text-gray-500">
                Experience: {item.experience}
              </p>

              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Call Now
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No service found 😢
          </p>
        )}
      </div>

    </div>
  );
};

export default ServicePage;