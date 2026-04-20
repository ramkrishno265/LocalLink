import { useState } from "react";
import { supabase } from "../../supabaseClient";

function ProviderSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔐 STEP 1: Supabase Auth Signup
      const { error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password
      });

      if (authError) throw authError;

      // 🗄️ STEP 2: Save to providers table (NO user_id)
      const { error: dbError } = await supabase
        .from("providers")
        .insert([
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
            location: form.location
          }
        ]);

      if (dbError) throw dbError;

      alert("Signup Successful ✅");

      setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
        location: ""
      });

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Provider Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default ProviderSignup;