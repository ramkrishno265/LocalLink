import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

function MyServices() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadServices = async () => {
      // 👉 current user
      const { data: { user } } = await supabase.auth.getUser();

      // ❌ login না থাকলে redirect
      if (!user) {
        navigate("/login");
        return;
      }

      // ✅ নিজের services আনো
      const { data, error } = await supabase
        .from("Service")
        .select("*")
        .eq("provider_id", user.id);

      if (!error) {
        setServices(data);
      } else {
        console.log(error);
      }
    };

    loadServices();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Services</h2>

      {services.length === 0 ? (
        <p>No services added yet</p>
      ) : (
        services.map((service) => (
          <div key={service.id} className="border p-3 mb-2 rounded">
            <h3 className="font-semibold">{service.title}</h3>
            <p>{service.description}</p>
            <p>Price: {service.price}৳</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyServices;