import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Nav from "./nav";

function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
