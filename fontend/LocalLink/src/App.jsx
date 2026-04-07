import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProviderDashboard from './page/provider/ProviderDashboard';
import MyServices from './page/provider/MyServices';
import AddService from './page/provider/AddService';

import Home from './page/user/home';
import Service from "./component/service";

import Header from "./component/header";
import { Outlet } from "react-router-dom";
import UserSignup from "./page/provider/ProviderSignup";
import ProviderSignup from "./page/user/UserSignup";


// Layout Component
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
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

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;