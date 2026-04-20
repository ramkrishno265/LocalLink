import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login Failed ❌");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow rounded">

        <h2 className="text-xl mb-4">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;