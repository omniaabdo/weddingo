import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import MinBreadcrumb from "../MinBreadcrumb";

export default function Category() {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <section className="checklist">
        <MinBreadcrumb
          links={[
            { title: "Profile", link: "/profile" },
            { title: "Add vendor", link: "/profile/my-services" },
            {
              title: "Category",
              link: "/profile/my-services/category",
            },
          ]}
        />
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={6}>
              <h3>
                <b>Store Category</b>
              </h3>
              <p>here you can add your information as store category owner </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <h5>Basic Information</h5>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="d-block my-5 py-2 w-25"
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    console.log(formData);
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
