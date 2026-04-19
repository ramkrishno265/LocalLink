import React, { useEffect, useState } from "react";

const MyServices = () => {
  const [services, setServices] = useState([]);

  // Fetch services
  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/providers");
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Delete service
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/providers/${id}`, {
        method: "DELETE",
      });

      setServices(services.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Services
      </h1>

      <div className="max-w-4xl mx-auto grid gap-4">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-gray-500">{service.category}</p>
              <p className="text-gray-500">{service.phone}</p>
              <p className="text-gray-500">{service.location}</p>
            </div>

            <button
              onClick={() => handleDelete(service._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;