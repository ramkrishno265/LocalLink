import React, { useEffect, useState } from "react";
import { supabase } from "../../src/supabaseClient";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    email: "",
  });

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Load Profile
  useEffect(() => {
    const loadProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data) {
        setForm({
          name: data.name || "",
          location: data.location || "",
          email: data.email || "",
        });

        setImage(data.image);
      }
    };

    loadProfile();
  }, []);

  // 🔹 Change input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Image select
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);

    // 👁️ preview instantly
    if (selected) {
      setImage(URL.createObjectURL(selected));
    }
  };

  // 🔹 Upload Image
  const uploadImage = async () => {
    if (!file) return image;

    const fileName = `${Date.now()}_${file.name}`;

    const { error } = await supabase.storage
      .from("avatars")
      .upload(fileName, file);

    if (error) {
      alert("Image upload failed");
      return image;
    }

    const { data } = supabase.storage
      .from("avatars")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  // 🔹 Update Profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not found");

      const imageUrl = await uploadImage();

      const { error } = await supabase
        .from("profiles")
        .update({
          name: form.name,
          location: form.location,
          image: imageUrl,
        })
        .eq("id", user.id);

      if (error) throw error;

      alert("✅ Profile Updated!");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Profile Settings
        </h2>

        {/* 🔥 Profile Image Upload */}
        <div className="flex justify-center mb-6">
          <label className="relative cursor-pointer group">

            <img
              src={
                image ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              className="w-28 h-28 rounded-full object-cover border"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-sm">
                Change Photo
              </span>
            </div>

            {/* Hidden input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Name */}
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {/* Location */}
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Email */}
        <input
          name="email"
          value={form.email}
          disabled
          className="w-full mb-4 p-2 border rounded bg-gray-100"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;