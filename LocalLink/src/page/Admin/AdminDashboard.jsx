import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);

  // 🔥 OVERVIEW STATE
  const [servicesCount, setServicesCount] = useState(0);
  const [providersCount, setProvidersCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  // 🔥 TABLE STATE
  const [activeTab, setActiveTab] = useState("overview");
  const [services, setServices] = useState([]);
  const [providers, setProviders] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchAll();
  }, []);

  // 🔥 FETCH ALL DATA
  const fetchAll = async () => {
    setLoading(true);

    // OVERVIEW COUNTS
    const { data: servicesData } = await supabase
      .from("services")
      .select("*");

    const { data: providersData } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "provider");

    const { data: clientsData } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "client");

    setServicesCount(servicesData?.length || 0);
    setProvidersCount(providersData?.length || 0);
    setClientsCount(clientsData?.length || 0);

    // TABLE DATA
    setServices(servicesData || []);
    setProviders(providersData || []);
    setClients(clientsData || []);

    setLoading(false);
  };

  // 🔥 DELETE
  const handleDelete = async (table, id) => {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq("id", id);

    if (!error) {
      fetchAll();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* ================= HEADER ================= */}
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* ================= OVERVIEW CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div
          onClick={() => setActiveTab("overview")}
          className="bg-white p-6 rounded-2xl shadow cursor-pointer hover:shadow-lg"
        >
          <h2 className="text-gray-600">Total Services</h2>
          <p className="text-3xl text-blue-600 font-bold">
            {servicesCount}
          </p>
        </div>

        <div
          onClick={() => setActiveTab("providers")}
          className="bg-white p-6 rounded-2xl shadow cursor-pointer hover:shadow-lg"
        >
          <h2 className="text-gray-600">Providers</h2>
          <p className="text-3xl text-green-600 font-bold">
            {providersCount}
          </p>
        </div>

        <div
          onClick={() => setActiveTab("clients")}
          className="bg-white p-6 rounded-2xl shadow cursor-pointer hover:shadow-lg"
        >
          <h2 className="text-gray-600">Clients</h2>
          <p className="text-3xl text-purple-600 font-bold">
            {clientsCount}
          </p>
        </div>

      </div>

      {/* ================= TABS ================= */}
      <div className="flex gap-3 mb-6">

        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded ${activeTab === "overview"
            ? "bg-blue-600 text-white"
            : "bg-white"
            }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab("services")}
          className={`px-4 py-2 rounded ${activeTab === "services"
            ? "bg-blue-600 text-white"
            : "bg-white"
            }`}
        >
          Services
        </button>

        <button
          onClick={() => setActiveTab("providers")}
          className={`px-4 py-2 rounded ${activeTab === "providers"
            ? "bg-green-600 text-white"
            : "bg-white"
            }`}
        >
          Providers
        </button>

        <button
          onClick={() => setActiveTab("clients")}
          className={`px-4 py-2 rounded ${activeTab === "clients"
            ? "bg-purple-600 text-white"
            : "bg-white"
            }`}
        >
          Clients
        </button>

      </div>

      {/* ================= OVERVIEW ================= */}
      {activeTab === "overview" && (
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            System Overview
          </h2>

          <ul className="text-gray-600 space-y-2">
            <li>✔ Services Module Active</li>
            <li>✔ Provider System Connected</li>
            <li>✔ Client System Running</li>
            <li>✔ Database Fully Synced</li>
          </ul>
        </div>
      )}

      {/* ================= SERVICES TABLE ================= */}
      {activeTab === "services" && (
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-5">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">
              Services Management
            </h2>

            <span className="text-sm text-gray-500">
              Total: {services.length}
            </span>
          </div>

          {/* TABLE WRAPPER */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[600px] border-collapse">

              <thead>
                <tr className="bg-gray-100 text-left text-gray-600 text-sm">

                  <th className="p-3 whitespace-nowrap">Name</th>
                  <th className="p-3 whitespace-nowrap">Service Type</th>
                  <th className="p-3 whitespace-nowrap">Location</th>
                  <th className="p-3 text-center whitespace-nowrap">Action</th>

                </tr>
              </thead>

              <tbody>

                {services.map((s, index) => (
                  <tr
                    key={s.id}
                    className={`border-b hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                  >

                    <td className="p-3 text-sm md:text-base font-medium text-gray-800 whitespace-nowrap">
                      {s.name || "N/A"}
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs md:text-sm">
                        {s.service_type || "N/A"}
                      </span>
                    </td>

                    <td className="p-3 text-gray-600 text-sm md:text-base whitespace-nowrap">
                      📍 {s.location || "N/A"}
                    </td>

                    <td className="p-3 flex justify-center gap-2 whitespace-nowrap">

                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-xs md:text-sm transition">
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete("services", s.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs md:text-sm transition"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}

      {/* ================= PROVIDERS TABLE ================= */}
      {activeTab === "providers" && (
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-5">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">
              Providers Management
            </h2>

            <span className="text-sm text-gray-500">
              Total: {providers.length}
            </span>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[600px] border-collapse">

              <thead>
                <tr className="bg-gray-100 text-left text-sm text-gray-600">

                  <th className="p-3">Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Location</th>
                  <th className="p-3 text-center">Action</th>

                </tr>
              </thead>

              <tbody>

                {providers.map((p, index) => (
                  <tr
                    key={p.id}
                    className={`border-b hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                  >

                    <td className="p-3 font-medium text-gray-800 whitespace-nowrap">
                      {p.name || "N/A"}
                    </td>

                    <td className="p-3 text-gray-600 whitespace-nowrap">
                      📞 {p.phone || "N/A"}
                    </td>

                    <td className="p-3 text-gray-600 whitespace-nowrap">
                      📍 {p.location || "N/A"}
                    </td>

                    <td className="p-3 flex justify-center gap-2 whitespace-nowrap">

                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-xs md:text-sm">
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete("profiles", p.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs md:text-sm"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}

      {/* ================= CLIENTS TABLE ================= */}
      {activeTab === "clients" && (
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-5">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">
              Clients Management
            </h2>

            <span className="text-sm text-gray-500">
              Total: {clients.length}
            </span>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[600px] border-collapse">

              <thead>
                <tr className="bg-gray-100 text-left text-sm text-gray-600">

                  <th className="p-3">Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Location</th>
                  <th className="p-3 text-center">Action</th>

                </tr>
              </thead>

              <tbody>

                {clients.map((c, index) => (
                  <tr
                    key={c.id}
                    className={`border-b hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                  >

                    <td className="p-3 font-medium text-gray-800 whitespace-nowrap">
                      {c.name || "N/A"}
                    </td>

                    <td className="p-3 text-gray-600 whitespace-nowrap">
                      📞 {c.phone || "N/A"}
                    </td>

                    <td className="p-3 text-gray-600 whitespace-nowrap">
                      📍 {c.location || "N/A"}
                    </td>

                    <td className="p-3 flex justify-center gap-2 whitespace-nowrap">

                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-xs md:text-sm">
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete("profiles", c.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs md:text-sm"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}

    </div>
  );
};

export default AdminDashboard;