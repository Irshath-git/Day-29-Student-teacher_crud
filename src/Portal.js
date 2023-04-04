import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Navbar/Sidebar";
import Topbar from "./Components/Navbar/Topbar";

function Portal() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
