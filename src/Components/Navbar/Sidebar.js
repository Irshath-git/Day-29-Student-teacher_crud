import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Sidebar() {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr class="sidebar-divider my-0" />
        <li class="nav-item active">
          <Link class="nav-link" to={"/portal/mentorlist"}>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Mentors List</span>
          </Link>
        </li>
        <li class="nav-item active">
          <Link class="nav-link" to={"/portal/studentlist"}>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Students List</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">LogOut</div>
        <li class="nav-item active">
          <Link class="nav-link" to={"/"}>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>LogOut</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
