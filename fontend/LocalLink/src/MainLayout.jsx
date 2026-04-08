import Header from "./Header";
import Footer from "./component/footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      {/* Header height fix */}
      <main className="flex-grow pt-56">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;