import React, { useState } from "react";
import Header from "./header";
import Subheader from "./subheader";
import Sidebar from "./sidebar";
import "./layout.css";

const Layout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <Header
        sideBarOpen={sideBarOpen}
        toggleSidebarHandler={toggleSidebarHandler}
      />
      <Subheader />
      {sideBarOpen && <Sidebar sideBarOpen={sideBarOpen} />}
    </>
  );
};

export default Layout;
