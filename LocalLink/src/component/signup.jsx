import { useState } from "react";
import { supabase } from "../../src/supabaseClient";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "client",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 🔐 1. CREATE AUTH USER
      const { data, error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (authError) throw authError;

      const user = data?.user;

      if (!user) {
        throw new Error("User creation failed");
      }

      // 💾 2. SAVE PROFILE DATA
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([
          {
            id: user.id,      // 🔥 MUST MATCH AUTH ID
            name: form.name,
            email: form.email,
            role: form.role,  // 🔥 IMPORTANT
          },
        ]);

      if (profileError) throw profileError;

      alert("Signup successful!");
      navigate("/login");

    } catch (err) {
      console.log("SIGNUP ERROR:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        <p className="text-center text-gray-500 text-sm mt-2">
          Join our service marketplace
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {/* Name */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          {/* Email */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          {/* Role */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="client">Client (Hire Service)</option>
            <option value="provider">Provider (Offer Service)</option>
          </select>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-600 cursor-pointer font-medium"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;