import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
const CalendarCard = ({ calendarRef, onCalndarView }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(window.innerWidth > 737);

  useEffect(() => {
    const handleResize = () => {
      setShowCalendar(window.innerWidth > 737);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {showCalendar ? (
        <div className={"calendar-container"}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            calendarClassName="custom-calendar"
          />
        </div>
      ) : (
        <div
          ref={calendarRef}
          className={"calendar-abslute"}
          style={{ display: onCalndarView ? "flex" : "none" }}
        >
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            calendarClassName="custom-calendar"
          />
        </div>
      )}
    </>
  );
};

export default CalendarCard;
