import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Nav from "./nav";

function MainLayout() {
  return (
    <>
      <div className="bg-gray-50 flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
