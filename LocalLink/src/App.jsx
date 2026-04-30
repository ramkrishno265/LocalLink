import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header";
import Footer from "./component/footer";
import { Outlet } from "react-router-dom";

/* Pages */
import Home from "./page/user/home";
import Service from "./component/service";
import Aboutpage from "./page/user/AboutUs";
import ProviderList from "./page/provider/Providers_list";
import Signup from "./component/signup";
import Login from "./component/login";
import Profile from "./component/profile";

/* Provider */
import ProviderDashboard from "./page/provider/ProviderDashboard";
import MyServices from "./page/provider/MyServices";
import AddService from "./page/provider/AddService";
import ProviderLogin from "./page/provider/ProviderLogin";

/* User */
import UserDashboard from "./page/user/userDashboard";

/* Admin */
import AdminDashboard from "./page/Admin/AdminDashboard";
import AdminLogin from "./page/Admin/AdminLogin";



/* =========================
   PUBLIC LAYOUT (Header + Footer)
========================= */
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


/* =========================
   DASHBOARD LAYOUT (NO HEADER/FOOTER)
========================= */
function DashboardLayout() {
  return <Outlet />;
}


/* =========================
   APP
========================= */
function App() {
  return (
    <BrowserRouter basename="/LocalLink">
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="user/service" element={<Service />} />
          <Route path="aboutus" element={<Aboutpage />} />
          <Route path="provider_list" element={<ProviderList />} />

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />

        </Route>



        {/* ================= PROVIDER DASHBOARD ================= */}
        <Route element={<DashboardLayout />}>

          <Route path="provider/dashboard" element={<ProviderDashboard />} />
          <Route path="provider/my-services" element={<MyServices />} />
          <Route path="provider/add-service" element={<AddService />} />

        </Route>



        {/* ================= USER DASHBOARD ================= */}
        <Route element={<DashboardLayout />}>

          <Route path="user/dashboard" element={<UserDashboard />} />

        </Route>



        {/* ================= ADMIN ================= */}
        <Route element={<DashboardLayout />}>

          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin-login" element={<AdminLogin />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;