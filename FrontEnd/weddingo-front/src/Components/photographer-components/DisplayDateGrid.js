import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment"; // مكتبة لتسهيل التعامل مع التواريخ

export default function DisplayDateGrid({ selectedDates }) {
  console.log("Date",selectedDates);
  
  const [days, setDays] = useState([]);

  // الحصول على تاريخ اليوم و إضافة 31 يوم
  useEffect(() => {
    const today = new Date();
    const futureDays = [];

    for (let i = 0; i < 31; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i); // إضافة الأيام بالتدريج
      futureDays.push(futureDate);
    }

    setDays(futureDays);
  }, []);

  // التحقق ما إذا كان اليوم محددًا في المصفوفة
  const isSelectedDate = (date) => {
    return selectedDates.some(
      (selectedDate) =>
        new Date(selectedDate).toDateString() === new Date(date).toDateString()
    );
  };

  return (
    <Row className="date-grid">
      {days.map((day, index) => (
        <Col
          lg={1} md={2} sm={3} xs={3}
          key={index}
          className={`date-box ${
            isSelectedDate(day) ? "selected" : "not-selected"
          }`}
        >
          <div>
            {day.toLocaleDateString("en-GB", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </Col>
      ))}
    </Row>
  );
}
