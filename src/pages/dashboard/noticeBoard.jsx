import React from "react";
import "./noticeBoard.css";

const NoticeBoard = () => {
  const notices = [
    {
      title: "Rescheduled Session",
      time: "Just Now",
      description:
        "This session has been rescheduled to 16th August, 2020 by student",
      action: "Action",
      active: true,
    },
    {
      title: "John Manor (Student)",
      time: "Aug 10, 2020",
      description:
        "I have an engagement on your proposed date. Could we reschedule?",
    },
    {
      title: "Admin",
      time: "Aug 10, 2020",
      description: "Tutorial commences in 30mins. Get ready.",
    },
    {
      title: "Admin",
      time: "Aug 10, 2020",
      description: "Tutorial commences in 30mins. Get ready.",
    },
  ];
  return (
    <div className="notice-board">
      <h3 className="notice-title">Notice Board</h3>

      <div className="timeline">
        {notices.map((n, index) => (
          <div key={index} className="timeline-item">
            <div className={`timeline-dot ${n.active ? "active" : ""}`}></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>{n.title}</h4>
                <span
                  className="time"
                  style={{ color: n.time === "Just Now" ? "#000" : "#afafaf" }}
                >
                  {n.time}
                </span>
              </div>
              <p className="desc">
                {n.description}
                {n.action && (
                  <>
                    <span className="dot-separator">.</span>{" "}
                    <a href="#" className="action-link">
                      {n.action}
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-notice">
        <a href="#" className="footer-link-notice">
          Go to notifications <span className="arrow"></span>
        </a>
      </div>
    </div>
  );
};

export default NoticeBoard;
