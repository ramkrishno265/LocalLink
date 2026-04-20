import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProviderDashboard from './page/provider/ProviderDashboard';
import MyServices from './page/provider/MyServices';
import AddService from './page/provider/AddService';

import Home from './page/user/home';
import Service from "./component/service";

import Header from "./component/header";
import Footer from "./component/footer";
import { Outlet } from "react-router-dom";
import UserSignup from "./page/provider/ProviderSignup";
import ProviderSignup from "./page/provider/ProviderSignup";
import ProviderLogin from "./page/provider/ProviderLogin";
import Aboutpage from "./page/user/AboutUs";
import ProviderList from "./page/provider/Providers_list"
import AdminDashboard from "./page/Admin/AdminDashboard";
import AdminLogin from "./page/Admin/AdminLogin";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";



// Layout Component
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/LocalLink">
      <Routes>

        {/* Layout wrapper */}
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="user/service" element={<Service />} />

          <Route path="provider/dashboard" element={<ProviderDashboard />} />
          <Route path="provider/my-services" element={<MyServices />} />
          <Route path="provider/add-service" element={<AddService />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/provider/signup" element={<ProviderSignup />} />
          <Route path="/provider/login" element={<ProviderLogin />} />
          <Route path="/aboutus" element={<Aboutpage/>}/>
          <Route path="/provider_list" element={<ProviderList/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/admin-login" element={<AdminLogin/>}/>
          


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;