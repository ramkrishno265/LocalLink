import { useState } from "react";
import { supabase } from "../../src/supabaseClient";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 🔐 1. LOGIN
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (loginError) throw loginError;

      // 👤 2. GET AUTH USER (MOST IMPORTANT FIX)
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData?.user) {
        throw new Error("User not found after login");
      }

      const user = userData.user;

      // 👤 3. GET PROFILE ROLE
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle(); // 🔥 SAFE

      if (profileError) throw profileError;

      const role = profile?.role;

      console.log("USER:", user);
console.log("PROFILE:", profile);
console.log("ERROR:", profileError);

      // 🚀 4. ROLE CHECK + REDIRECT
      if (!role) {
        setError("Role not found in database");
        return;
      }

      if (role === "provider") {
        navigate("/provider/dashboard");
      } else if (role === "client") {
        navigate("/user/dashboard");
      } else {
        setError("Invalid role type");
      }

    } catch (err) {
      console.log("LOGIN ERROR:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-blue-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 text-sm mt-2">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6 space-y-4">

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;