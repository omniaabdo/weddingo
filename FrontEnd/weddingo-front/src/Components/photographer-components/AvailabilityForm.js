import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Badge } from "react-bootstrap";
import moment from "moment"; // مكتبة لتسهيل التعامل مع التواريخ

function AvailabilityForm({ handleSelectedDates }) {
  const [edit, setEdit] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);

  // الحصول على التاريخ الحالي
  const today = moment();

  // إنشاء مصفوفة تحتوي على 31 يومًا بدءًا من تاريخ اليوم
  const daysArray = Array.from({ length: 31 }, (_, i) =>
    moment(today).add(i, "days")
  );

  // تحديث تواريخ الأيام المختارة
  const handleCheckboxChange = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  // عرض التواريخ المختارة

  return (
    <div className="mt-4">
      <h5>Select Available Days:</h5>
      {edit && (
        <>
          <Row>
            {/* عرض 31 مربع */}
            {daysArray.map((day, index) => (
              <Col key={index} xs={4} md={2} lg={1} className="mb-3">
                <div
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  {/* رقم اليوم */}
                  <p>{day.format("DD MMM")}</p>

                  {/* Checkbox */}
                  <Form.Check
                    type="checkbox"
                    value={day.format("YYYY-MM-DD")}
                    onChange={() =>
                      handleCheckboxChange(day.format("YYYY-MM-DD"))
                    }
                  />
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* زر التأكيد */}
      {edit ? (
        <>
          <Button
            variant="primary"
            onClick={() => {
              setEdit(false);
              return handleSelectedDates(selectedDates);
            }}
          >
            Confirm Available Days
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="primary"
            onClick={() => {
              setSelectedDates([]);
              setEdit(true);
            }}
          >
            Added Days
          </Button>
        </>
      )}
      {/* زر الاضافة */}

      {/* عرض التواريخ المختارة */}
      <div className="mt-3">
        <h6>Selected Dates:</h6>
        {selectedDates.length != 0 ? (
          <>
            <ul
              className="d-flex flex-wrap gap-3"
              style={{ listStyle: "none" }}
            >
              {selectedDates.map((date, index) => (
                <li key={index}>
                  <Badge bg="success">{date}</Badge>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p>No Days Selected </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AvailabilityForm;
