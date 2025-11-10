import React, { useState } from "react";
import "./sidebar.css";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { CiGrid42, CiUser } from "react-icons/ci";
import { LiaBell } from "react-icons/lia";
import { SlSocialYoutube } from "react-icons/sl";
import { TfiBlackboard } from "react-icons/tfi";

const Sidebar = ({ sideBarOpen }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  const navItems = [
    { name: "Overview", icon: <CiGrid42 /> },
    {
      name: "Sessions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
          fill="currentColor"
        >
          <path d="M 8 6 C 6.35 6 5 7.35 5 9v2c0 1.65 1.35 3 3 3h32c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3H8zM8 8h32c.56 0 1 .44 1 1v2c0 .56-.44 1-1 1H8c-.56 0-1-.44-1-1V9c0-.56.44-1 1-1zM8 20c-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3h32c1.65 0 3-1.35 3-3v-2c0-1.65-1.35-3-3-3H8zM8 22h32c.56 0 1 .44 1 1v2c0 .56-.44 1-1 1H8c-.56 0-1-.44-1-1v-2c0-.56.44-1 1-1zM8 34c-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3h32c1.65 0 3-1.35 3-3v-2c0-1.65-1.35-3-3-3H8zM8 36h32c.56 0 1 .44 1 1v2c0 .56-.44 1-1 1H8c-.56 0-1-.44-1-1v-2c0-.56.44-1 1-1z" />
        </svg>
      ),
    },
    { name: "Notifications", icon: <LiaBell /> },
    { name: "Media", icon: <SlSocialYoutube /> },
    { name: "Whiteboard", icon: <TfiBlackboard /> },
    { name: "Account", icon: <CiUser /> },
  ];

  const pageLinks = ["K-12 Videos", "Podcasts", "FAQs", "Help and Support"];

  return (
    <div
      className={sideBarOpen ? "sidebar-container" : "sidebar-close-container"}
    >
      {/* Avatar Section */}
      <div className="sidebar-user">
        <div className="avatar-header">
          <p>V</p>
        </div>
        <div className="user-section">
          <span className="greeting">Hello,</span>
          <span className="username">Victor</span>
        </div>
        <div className="notification-bell">
          <MdOutlineNotificationsNone className="bell" />
          <p className="notification-dot">4</p>
        </div>
      </div>

      {/* Navigation Titles */}
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`sidebar-item ${
              activeTab === item.name ? "active" : ""
            }`}
            onClick={() => setActiveTab(item.name)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Bottom Page Links */}
      <div className="sidebar-links">
        {pageLinks.map((link, index) => (
          <a href="#" className="sidebar-link" key={index}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
