import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/WelcomeSection.css"; // Import the CSS file for custom styling
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/config";
const DataProfileCard = ({ hlink, title, value, active }) => {
  return (
    <>
      <Col xs={6} md={3} className="mb-3">
        <Link to={hlink}>
          <Card className="h-100 status-card">
            <Card.Body className="text-center d-flex align-items-center justify-content-between flex-wrap">
              <div className="text-left">
                <Card.Title className="h6">{title}</Card.Title>
                <Card.Text>{value}</Card.Text>
              </div>
              <div className="circle-status">
                <div className={`circle ${active && "active"}`}></div>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};

function WelcomeSection({ name, fav, services, image }) {
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
                    {image && image !== "" ? (
                      <>
                        <img
                          src={`${BASE_URL}/image/${image}`}
                          alt="Wedding"
                          className="rounded main-image "
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src="https://via.placeholder.com/150"
                          alt="Wedding"
                          className="rounded main-image "
                        />
                      </>
                    )}
                    {/* <div className="position-absolute top-0 start-0 m-2">
                      <Button variant="light" size="sm" className="ms-1">
                        ✏️
                      </Button>
                      <Button variant="light" size="sm">
                        📷
                      </Button>
                    </div> */}
                    {/* <div className="position-absolute bottom-0 start-0 bg-primary text-white p-1 rounded countdown">
                      <span>20</span> يوم <span>4</span> ساعة
                    </div> */}
                  </div>
                </Col>

                {/* Center Section: Welcome Message and Edit */}
                <Col xs={12} md={9} className="welcome-profile_welcome-col-2">
                  <h4 className="mb-1 fw-bold">
                    اهلا بك ,{name ? name : "مستخدم 1"}
                  </h4>
                  <p className="mb-4">
                    October 5, 2024{" "}
                    <Link to={"/profile/edit-profile"} className="text-primary">
                      تعديل
                    </Link>
                  </p>

                  {/* Status Cards Section */}
                  <Row className="gx-3">
                    {/* {[
                      {
                        title: "المفضلة",
                        value: `${fav && fav} مكان`,
                        hlink: "/profile/vendor-manager",
                        active: false,
                      },

                      {
                        title: "الخدمات",
                        value: `${services && services} خدمات مضافة`,
                        hlink: "/profile/checklist",
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
                    ))} */}

                    <DataProfileCard
                      title={"المفضلة"}
                      value={`${fav ? fav : 0} مكان`}
                      hlink={"/profile/vendor-manager"}
                      active={false}
                    />

                    <DataProfileCard
                      title={"الخدمات"}
                      value={`${services ? services : 0} خدمات مضافه`}
                      hlink={"/profile/checklist"}
                      active={false}
                    />
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
