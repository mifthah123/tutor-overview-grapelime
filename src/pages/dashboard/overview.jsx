import React, { useEffect, useRef, useState } from "react";
import "./overView.css";
import SummaryCard from "./summaryCard";
import { Col, Container, Row } from "react-bootstrap";
import SessionList from "./sessionList";
import CalendarCard from "./calendarCard";
import NoticeBoard from "./noticeBoard";
import TutorRequestCard from "../../components/common/TutorRequestCard";

const Overview = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [onCalndarView, setOnCalendarView] = useState(false);
  const calendarRef = useRef(null);

  const upcomingSessions = [
    {
      id: 1,
      name: "Sheila Moore, Mackle Moore",
      date: "FRIDAY, MAY 18",
      mode: "Online",
      status: "TODAY",
      avatars: [
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
      ],
    },
    {
      id: 2,
      name: "John F Kennedy | Grade 3 Maths",
      date: "FRIDAY, MAY 18",
      mode: "In-house",
      status: "TODAY",
      avatars: [
        "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
      ],
    },
    {
      id: 3,
      name: "John F Kennedy | Grade 3 Maths",
      date: "FRIDAY, MAY 18",
      mode: "Online",
      status: "IN 2 DAYS",
      avatars: [
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
      ],
    },
  ];

  const completedSessions = [
    {
      id: 1,
      name: "Sheila Moore, Mackle Moore",
      date: "FRIDAY, MAY 18",
      mode: "Online",
      avatars: [
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
      ],
    },
    {
      id: 2,
      name: "John F Kennedy | Grade 3 Maths",
      date: "FRIDAY, MAY 18",
      mode: "In-house",
      avatars: [
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
      ],
    },
    {
      id: 3,
      name: "John F Kennedy | Grade 3 Maths",
      date: "FRIDAY, MAY 18",
      mode: "Online",
      status: "IN 2 DAYS",
      avatars: [
        "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
        "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
      ],
    },
  ];

  const onShowCalendar = () => {
    setOnCalendarView((prev) => !prev);
  };

  const showPopupCloseHandler = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        window.innerWidth <= 737
      ) {
        setOnCalendarView(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="overview-container">
      <div className="overview-container">
        {showPopup && (
          <TutorRequestCard showPopupCloseHandler={showPopupCloseHandler} />
        )}

        <div className="overview-main">
          {/* LEFT SECTION */}
          <div className="overview-left">
            <SummaryCard />
            <div className="session-lists">
              <Row>
                <Col lg={6}>
                  <SessionList
                    title="Upcoming sessions this week"
                    sessions={upcomingSessions}
                    type="upcoming"
                  />
                </Col>
                <Col lg={6}>
                  <SessionList
                    title="Completed"
                    sessions={completedSessions}
                    type="completed"
                  />
                </Col>
              </Row>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="overview-right">
            <CalendarCard
              calendarRef={calendarRef}
              onCalndarView={onCalndarView}
            />
            <NoticeBoard />
          </div>
          <div onClick={onShowCalendar} className="see-calendar">
            <p>See calendar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
