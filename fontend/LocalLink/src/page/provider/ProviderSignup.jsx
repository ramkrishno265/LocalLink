import { useState } from "react";

function ProviderSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    serviceType: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4 mt-[-100px]"
      >
        <h2 className="text-2xl font-bold text-center">Provider Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <input
          type="text"
          name="serviceType"
          placeholder="Service Type (e.g. Plumbing, Cleaning)"
          value={form.serviceType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default ProviderSignup;