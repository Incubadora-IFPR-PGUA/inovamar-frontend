import { Outlet } from "react-router-dom";

import Nav from "./nav";

function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default MainLayout;
