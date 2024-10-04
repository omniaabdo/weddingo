import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/WelcomeSection.css'; // Import the CSS file for custom styling

function WelcomeSection (){
  return (
    <div className="outer-container">
      <div className="dashboard-container py-5">
        <Card className="p-4 shadow-sm inner-card">
          <Row className="align-items-center">
            {/* Left Section: Image and Timer */}
            <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
              <div className="position-relative d-inline-block main-image-container">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Wedding"
                  className="rounded main-image"
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
            <Col xs={12} md={9}>
              <h4 className="mb-1 fw-bold">Welcome Omnia Abdo</h4>
              <p className="mb-4">October 5, 2024 <a href="#edit" className="text-primary">Edit</a></p>
              
              {/* Status Cards Section */}
              <Row className="gx-3">
                {[
                  { title: 'Services hired', value: '0 out of 21' , hlink: '/vendor-manager'},
                  { title: 'Tasks completed', value: '0 out of 81' , hlink: '/checklist'},
                  { title: 'Guests attending', value: '2 out of 2' },
                  { title: 'Seated guests', value: '2 out of 2' }
                ].map((item, index) => (
                  <Col xs={6} md={3} key={index} className="mb-3">
                    <a href={item.hlink}>
                    <Card className="h-100 status-card">
                      <Card.Body className="text-center">
                        <Card.Title className="h6">{item.title}</Card.Title>
                        <Card.Text>{item.value}</Card.Text>
                        <div className="circle-status">
                          <div className="circle"></div>
                        </div>
                        </Card.Body>
                        
                    </Card></a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default WelcomeSection;
