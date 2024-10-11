import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/WelcomeSection.css"; // Import the CSS file for custom styling
import { Link } from "react-router-dom";

function WelcomeSection() {
  return (
    <div className="welcome-profile min-div">
      <div className="container">
        <div className="outer-container">
          <div className="dashboard-container py-5">
            <Card className="p-4 shadow-sm inner-card">
              <Row className="align-items-center">
                {/* Left Section: Image and Timer */}
                <Col
                  xs={12}
                  md={3}
                  className="welcome-profile_welcome-col-1 text-center mb-3 mb-md-0"
                >
                  <div className="position-relative d-inline-block main-image-container">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wedding"
                      className="rounded main-image "
                    />
                    <div className="position-absolute top-0 start-0 m-2">
                      <Button variant="light" size="sm" className="me-1">
                        ✏️
                      </Button>
                      <Button variant="light" size="sm">
                        📷
                      </Button>
                    </div>
                    <div className="position-absolute bottom-0 start-0 bg-primary text-white p-1 rounded countdown">
                      <span>20</span> days <span>4</span> hrs
                    </div>
                  </div>
                </Col>

                {/* Center Section: Welcome Message and Edit */}
                <Col xs={12} md={9} className="welcome-profile_welcome-col-2">
                  <h4 className="mb-1 fw-bold">Welcome Omnia Abdo</h4>
                  <p className="mb-4">
                    October 5, 2024{" "}
                    <a href="#edit" className="text-primary">
                      Edit
                    </a>
                  </p>

                  {/* Status Cards Section */}
                  <Row className="gx-3">
                    {[
                      {
                        title: "Services hired",
                        value: "0 out of 21",
                        hlink: "/profile/vendor-manager",
                        active: false,
                      },
                      {
                        title: "Tasks completed",
                        value: "0 out of 81",
                        hlink: "/profile/checklist",
                        active: true,
                      },
                      {
                        title: "Guests attending",
                        value: "2 out of 2",
                        active: false,
                      },
                      {
                        title: "Seated guests",
                        value: "2 out of 2",
                        active: true,
                      },
                    ].map((item, index) => (
                      <Col xs={6} md={3} key={index} className="mb-3">
                        <Link to={item.hlink}>
                          <Card className="h-100 status-card">
                            <Card.Body className="text-center d-flex align-items-center justify-content-between flex-wrap">
                              <div className="text-left">
                                <Card.Title className="h6">
                                  {item.title}
                                </Card.Title>
                                <Card.Text>{item.value}</Card.Text>
                              </div>
                              <div className="circle-status">
                                <div
                                  className={`circle ${
                                    item.active && "active"
                                  }`}
                                ></div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
