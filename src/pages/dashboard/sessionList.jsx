import React from "react";
import { Col, Row } from "react-bootstrap";
import "./overView.css";
import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { PiDotsThreeVerticalLight } from "react-icons/pi";

const SessionList = ({ title, sessions, type }) => {
  return (
    <div className="session-box">
      <div className="session-header">{title}</div>

      <div className="session-list">
        {sessions.map((session, index) => (
          <div key={session.id} className="session-item">
            {/* Left section (index or icon) */}

            {/* Details */}
            <div style={{ display: "flex", gap: "12px" }}>
              {type === "upcoming" ? (
                <div className="session-index">{index + 1}.</div>
              ) : (
                <div className="session-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    style={{ color: "#00aeb3" }}
                  >
                    {" "}
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.707,12.707l-7.56,7.56 c-0.188,0.188-0.442,0.293-0.707,0.293s-0.52-0.105-0.707-0.293l-3.453-3.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0 l2.746,2.746l6.853-6.853c0.391-0.391,1.023-0.391,1.414,0S22.098,12.316,21.707,12.707z" />
                  </svg>
                </div>
              )}
              <div className="session-details">
                <div className="session-name">{session.name}</div>

                <div className="session-meta">
                  {session.status && (
                    <span
                      className={`session-badge ${
                        session.status === "TODAY" ? "today" : "upcoming"
                      }`}
                    >
                      {session.status}
                    </span>
                  )}
                  <span className="session-date">{session.date}</span>

                  <div className="session-more">
                    <IoLocationSharp style={{ color: "#00aeb3" }} />
                    <p style={{ fontWeight: "500", color: "#000" }}>
                      {session.mode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right avatars */}
            <div
              className="session-avatar-container"
              style={{ display: "flex", alignItems: "center" }}
            >
              {session.avatars && (
                <div className="session-avatars">
                  {session.avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="avatar"
                      className="avatar-img"
                    />
                  ))}
                </div>
              )}
              {type === "upcoming" && (
                <div className="more-option-session">
                  <PiDotsThreeVerticalLight
                    style={{
                      fontSize: "30px",
                      color: "#a5a5a5",
                      cursor: "pointer",
                    }}
                  />
                </div>
              )}
            </div>

            {/* More options */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionList;
