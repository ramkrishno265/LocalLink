import { useEffect, useState } from "react";


const AdminDashboard = () => {
  const [servicesCount, setServicesCount] = useState(0);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from("Service")
      .select("*");

    if (!error) {
      setServicesCount(data.length);
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Services */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Services</h2>
          <p className="text-3xl mt-2 text-blue-600">
            {servicesCount}
          </p>
        </div>

        {/* Providers (static for now) */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Providers</h2>
          <p className="text-3xl mt-2 text-green-600">
            0
          </p>
        </div>

        {/* Users (static for now) */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Users</h2>
          <p className="text-3xl mt-2 text-purple-600">
            0
          </p>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;