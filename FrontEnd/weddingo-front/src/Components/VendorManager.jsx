import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaHome,
  FaCamera,
  FaBus,
  FaEnvelope,
  FaSearch,
  FaHeart,
  FaCheck,
  FaMarker
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../assets/css/VendorManager.css"; // Custom styling
import NavBar from "./NavBar";

const vendors = [
  { name: "قاعات", icon: <FaHome />, link: "/vendors/venue" },
  { name: "مصورين", icon: <FaCamera />, link: "/vendors/photography" },
  { name: "سيارات", icon: <FaBus />, link: "/vendors/transportation" },
  {
    name: "مراكز التجميل",
    icon: <FaMarker />,
    link: "/vendors/invitations",
  },
];

export default function VendorManager() {
  return (
    <>
      <NavBar />
      <section>
        <Container className="my-vendors">
          <Row className="my-4 align-items-center">
            <Col md={5}>
              <h3>
                <b>اماكني المفضلة</b>
              </h3>
              <p>0 مكان مفضل حتي الان</p>
            </Col>
            {/* <Col md={3}>
              <Button variant="outline-info" className="mx-2">
                <FaHeart className="me-1" /> Favorites 0
              </Button>
              <Button variant="outline-success">
                <FaCheck className="me-1" /> Hired 0
              </Button>
            </Col>
            <Col md={4} className="text-end">
              <Button variant="primary">+ Add vendor</Button>
            </Col> */}
          </Row>

          <Row className="g-4">
            {vendors.map((vendor, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <Link to={vendor.link} className="vendor-link">
                  <Card className="vendor-card text-center">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <div className="vendor-icon mb-5">{vendor.icon}</div>
                      {/* <Card.Title>{vendor.name}</Card.Title> */}
                      <h5>{vendor.name}</h5>
                      {/* <Button variant="light" className="search-btn">
                        <FaSearch /> Search
                      </Button> */}
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
