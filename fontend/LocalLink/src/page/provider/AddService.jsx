import React, { useState } from "react";

const AddService = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    phone: "",
    location: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/providers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      alert("Service Added Successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding service");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Service
        </h2>

        <input name="name" placeholder="Name" onChange={handleChange}
          className="w-full mb-3 p-2 border rounded" required />

        <input name="category" placeholder="Category (Electrician)"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded" required />

        <input name="phone" placeholder="Phone"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded" required />

        <input name="location" placeholder="Location"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded" required />

        <input name="experience" placeholder="Experience"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded" required />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;