import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

const AddService = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    phone: "",
    location: "",
    experience: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from("Service")
      .insert([
        {
          name: form.name,
          category: form.category,
          phone: form.phone,
          location: form.location,
          experience: form.experience,
        },
      ]);

    setLoading(false);

   if (error) {
  console.log("SUPABASE ERROR:", error.message);
  alert(error.message);
} else {
      alert("✅ Service Added Successfully!");

      // form clear
      setForm({
        name: "",
        category: "",
        phone: "",
        location: "",
        experience: "",
      });
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

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="category"
          placeholder="Category (Electrician)"
          value={form.category}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="experience"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Adding..." : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddService;