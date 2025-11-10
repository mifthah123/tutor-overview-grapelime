import React from "react";
import "./header.css";
import logo from "../../assets/image/logo.jpg";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Header = ({ sideBarOpen, toggleSidebarHandler }) => {
  return (
    <header className="header">
      {/* Left Section - Logo */}
      <div className="header-left">
        <div className="header-logo">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="brand-name">LOREMLOGO</h2>
        </div>
        <div className="header-nav laptop-header-nav">
          <a href="#" className="nav-link-header active">
            K-12 Videos
          </a>
          <a href="#" className="nav-link-header">
            Podcasts
          </a>
          <a href="#" className="nav-link-header">
            FAQs
          </a>
          <a href="#" className="nav-link-header">
            Help and Support
          </a>
        </div>
      </div>

      {/* Center Navigation */}

      {/* Right Section - User Info */}
      <div className="sidebar-close" onClick={toggleSidebarHandler}>
        {sideBarOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>
      <div className="header-right">
        <div className="avatar-header">
          <p style={{ marginBottom: "0px" }}>V</p>
        </div>
        <div className="user-section">
          <span className="greeting">Hello,</span>
          <span className="username">Victor</span>
        </div>
        <div className="notification-bell">
          <FaCaretDown style={{ fontSize: "13px" }} />
          <MdOutlineNotificationsNone className="bell" />
          <p className="notification-dot">4</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
