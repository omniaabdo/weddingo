import React from "react";
import NavBar from "./NavBar";
import { Col, Row } from "react-bootstrap";
import '../assets/css/badget.css'
import { FaCamera, FaCar, FaHome, FaTeamspeak } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

function Budget() {
  return (
    <>
      <NavBar />
      <section className="badget">
        <div className="container" style={{ marginBlock: "6rem" }}>
          <Row className="my-4 align-items-center">
            <Col md={5}>
              <h3>
                <b>الميزانية</b>
              </h3>
              <p>يمكن حساب الميزانية الخاصة بك واختيار الاسعار المناسبة لك </p>
            </Col>
          </Row>
          <Row className="my-4">
            <Col md={4}>
              <div className="card">
                <ul className="badget-list">
                  <li>
                    <div className="badget-list_item">
                      <FaHome />
                      <span>30,000 جنيها </span>
                    </div>
                  </li>
                  <li>
                    <div className="badget-list_item">
                      <FaCamera />
                      <span>4,000 جنيها </span>
                    </div>
                  </li>
                  <li>
                    <div className="badget-list_item">
                      <FaCar />
                      <span>3,000 جنيها </span>
                    </div>
                  </li>
                  <li>
                    <div className="badget-list_item">
                      <GiAmpleDress />
                      <span>10,000 جنيها </span>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={8}>
              <div className="card d-flex flex-column justify-content-center align-items-center text-center">
                <div className="budget-content">
                  <h4>ميزانيتي</h4>
                  <p>
                    عند اختيارك للعروض المناسبة لك ,يمكننا حساب الميزانية
                    المناسبة لك هنا{" "}
                  </p>
                  <form>
                    <div className=" mb-2 form-control">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="ادخل ميزانيتك المتاحة..."
                      />
                    </div>
                  </form>
                  <p className="text-primary">
                    باقي من الميزانية 25,000 جنيها
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
export default Budget;
