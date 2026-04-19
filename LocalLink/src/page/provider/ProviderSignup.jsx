import { useState } from "react";
import axios from "axios";

function ProviderSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/providers", form);
      alert("Signup Successful");
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">Signup</button>
    </form>
  );
}

export default ProviderSignup;