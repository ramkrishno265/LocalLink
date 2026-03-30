import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProviderDashboard from './page/provider/ProviderDashboard';
import Home from './page/user/home';
import MyServices from './page/provider/MyServices';
import AddService from './page/provider/AddService';

function App() {
  return (
    <BrowserRouter basename="/LocalLink">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/provider/my-services" element={<MyServices />} />
        <Route path="/provider/add-service" element={<AddService />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;