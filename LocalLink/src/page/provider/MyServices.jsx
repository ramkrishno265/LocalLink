import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

function MyServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // -------------------
  // Load Services
  // -------------------
  const loadServices = async () => {
    setLoading(true);

    const { data, error: authError } = await supabase.auth.getUser();
    const user = data?.user;

    if (authError || !user) {
      navigate("/login");
      return;
    }

    const { data: servicesData, error } = await supabase
      .from("services")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.log("LOAD ERROR:", error.message);
    } else {
      setServices(servicesData);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadServices();
  }, []);

  // -------------------
  // Delete Service
  // -------------------
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      const { data, error: authError } = await supabase.auth.getUser();
      const user = data?.user;

      if (authError || !user) {
        alert("User not logged in");
        return;
      }

      // 🔥 delete with extra safety (id + user_id match)
      const { error } = await supabase
        .from("services")
        .delete()
        .eq("id", id)
        .eq("user_id", user.id);

      console.log("DELETE ERROR:", error);

      if (error) {
        alert("❌ Delete failed: " + error.message);
      } else {
        alert("✅ Deleted Successfully");
        loadServices();
      }

    } catch (err) {
      console.log("DELETE EXCEPTION:", err);
      alert("Something went wrong");
    }
  };

  // -------------------
  // UI
  // -------------------
  return (
    <div className="min-h-screen bg-gray-100 p-6 px-32">
      <h2 className="text-4xl font-bold mb-6 text-center">
        My Services
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : services.length === 0 ? (
        <p className="text-center text-gray-500">
          No services added yet
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              {service.image && (
                <img
                  src={service.image}
                  alt="service"
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-4 ">
                <h3 className="text-2xl font-semibold mb-2">
                  {service.service_type}
                </h3>

                <p className="text-sm text-gray-600 items-center ">
                  👤 {service.name}
                </p>

                <p className="text-sm text-gray-600">
                  📞 {service.phone}
                </p>

                <p className="text-sm text-gray-600">
                  📍 {service.location}
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  ⏳ {service.experience}
                </p>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(service.id)}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyServices;