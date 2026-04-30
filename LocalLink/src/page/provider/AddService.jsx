import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

const AddService = () => {
  const [form, setForm] = useState({
    service_type: "",
    name: "",
    phone: "",
    location: "",
    experience: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // -------------------
  // input handle
  // -------------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // -------------------
  // image upload
  // -------------------
  const uploadImage = async (file) => {
    const fileName = `${Date.now()}_${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("service-images")
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from("service-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  // -------------------
  // submit
  // -------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔐 safe user fetch
      const { data, error: authError } = await supabase.auth.getUser();

      const user = data?.user;

      if (authError || !user) {
        throw new Error("User not logged in");
      }

      let imageUrl = "";

      // 📸 upload image
      if (file) {
        if (!file.type.startsWith("image/")) {
          throw new Error("Only image files allowed");
        }
        imageUrl = await uploadImage(file);
      }

      // 💾 insert service
      const { error } = await supabase.from("services").insert([
        {
          user_id: user.id,
          service_type: form.service_type,
          name: form.name,
          phone: form.phone,
          location: form.location,
          experience: form.experience,
          image: imageUrl,
        },
      ]);

      if (error) throw error;

      alert("✅ Service Added Successfully!");

      // reset form
      setForm({
        service_type: "",
        name: "",
        phone: "",
        location: "",
        experience: "",
      });

      setFile(null);
    } catch (error) {
      console.log("ERROR:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
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
          name="service_type"
          placeholder="Service Type (Electrician, Plumber)"
          value={form.service_type}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          name="name"
          placeholder="Name"
          value={form.name}
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
          placeholder="Experience (e.g. 2 years)"
          value={form.experience}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {/* 📸 image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-4"
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