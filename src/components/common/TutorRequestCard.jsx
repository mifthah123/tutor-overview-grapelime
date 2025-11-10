import React from "react";
import "./TutorRequest.css";
import { CgLock } from "react-icons/cg";
import { FiCrosshair, FiEdit2 } from "react-icons/fi";
import { BiCheck, BiCross } from "react-icons/bi";
import { RxCross1, RxDrawingPin } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";

const TutorRequestCard = ({ showPopupCloseHandler }) => {
  return (
    <div className="request-container">
      <div className="request-card">
        <div className="request-close-button">
          <RxCross1 onClick={showPopupCloseHandler} strokeWidth={1} />
        </div>
        {/* Left Section - Profile and Info */}
        <div className="request-left-section">
          {/* Profile Image */}
          <div className="request-profile-image">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Profile"
            />
          </div>

          {/* Text Info */}
          <div className="request-info-section">
            <h3 className="request-title">Tutor Request</h3>
            <div className="request-details">
              <span>Client: Sheila Pratt</span>
              <span>Date: 16 August, 2020</span>
              <span>Time: 8:00AM - 10:00AM</span>
            </div>
          </div>
        </div>

        {/* Right Section - Action Buttons */}
        <div className="request-actions-section">
          {/* Accept Button */}
          <button className="request-action-btn">
            <div className="request-icon-circle request-accept">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
                fill="currentColor"
                style={{ color: "#009ca6" }}
              >
                <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
              </svg>
            </div>
            <span className="request-action-label request-accept-label">
              Accept
            </span>
          </button>

          {/* Decline Button */}
          <button
            onClick={showPopupCloseHandler}
            type="button"
            className="request-action-btn"
          >
            <div className="request-icon-circle request-decline">
              <RxCross1 color="red" size={20} strokeWidth={1} />
            </div>
            <span className="request-action-label request-decline-label">
              Decline
            </span>
          </button>

          {/* Propose New Time Button */}
          <button className="request-action-btn">
            <div className="request-icon-circle request-propose">
              <CiClock2 color="#000" size={25} />
            </div>
            <span className="request-action-label request-propose-label">
              Propose new time
            </span>
          </button>

          {/* Mark as Tentative Button */}
          <button className="request-action-btn request-tentative-btn ">
            <div className="request-icon-circle request-tentative">
              <RxDrawingPin color="#009ca6" size={25} />
            </div>
            <span
              style={{ color: "#009ca6" }}
              className="request-action-label request-tentative-label"
            >
              Mark as tentative
            </span>
          </button>

          {/* Close Button */}
          <button className="request-close-btn"></button>
        </div>
      </div>
    </div>
  );
};

export default TutorRequestCard;
