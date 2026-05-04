import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const ProviderProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [provider, setProvider] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH DATA
  useEffect(() => {
    const fetchData = async () => {

      // 👤 provider info
      const { data: providerData, error: providerError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (!providerError) {
        setProvider(providerData);
      }

      // 💼 provider services
      const { data: serviceData, error: serviceError } = await supabase
        .from("services")
        .select("*")
        .eq("user_id", id);

      if (!serviceError) {
        setServices(serviceData || []);
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!provider) {
    return <p className="text-center mt-10">Provider not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-6">

        {/* ================= PROFILE SECTION ================= */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* IMAGE */}
          <div className="w-full md:w-1/3">
            <div className="h-72 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">

              {provider.image ? (
                <img
                  src={provider.image}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>No Image</span>
              )}

            </div>
          </div>

          {/* INFO */}
          <div className="flex-1">

            <h1 className="text-3xl font-bold">
              {provider.name} ✔
            </h1>

            <p className="text-gray-500 mt-2">
              📍 {provider.location}
            </p>

            <p className="text-gray-500">
              📞 {provider.phone}
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mt-4">

              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                ⭐ {provider.experience || 0} yrs experience
              </span>

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                ⭐ {provider.rating || 0}/5 rating
              </span>

              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                🔥 Available
              </span>

            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex gap-3">

              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                📞 Call Now
              </button>

              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                💬 Chat
              </button>

              <button className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300">
                ⭐ Save
              </button>

            </div>

          </div>
        </div>

        {/* ================= SERVICES SECTION ================= */}
        <div className="mt-10">

          <h2 className="text-xl font-semibold mb-4">
            Services Provided
          </h2>

          {services.length === 0 ? (
            <p className="text-gray-500">No services available</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {services.map((s) => (
                <div
                  key={s.id}
                  className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-4"
                >

                  {/* IMAGE */}
                  <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">

                    {s.image ? (
                      <img
                        src={s.image}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>No Image</span>
                    )}

                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mt-3">
                    {s.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-sm mt-1">
                    {s.description}
                  </p>

                  {/* PRICE */}
                  <p className="mt-2 text-blue-600 font-semibold">
                    ৳ {s.price || "Negotiable"}
                  </p>

                  {/* BUTTON */}
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    View Details
                  </button>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProviderProfile;