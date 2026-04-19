import { useState } from "react";
import axios from "axios";

function ProviderLogin() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/provider/login",
        form
      );

      alert("Login Successful");

      // token save
      localStorage.setItem("token", res.data.token);

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default ProviderLogin;