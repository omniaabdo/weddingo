import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import MinBreadcrumb from "../MinBreadcrumb";
import { Link } from "react-router-dom";

export default function Store() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    stockCount: "",
    price: "",
    createdAt: "",
    isActive: "",
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
              title: "Store",
              link: "/profile/my-services/store",
            },
          ]}
        />
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={6}>
              <h3>
                <b>Store Services</b>
              </h3>
              <p>here you can add your information as store owner </p>
            </Col>
            <Col md={4} className="text-end ms-auto">
              <Link to={"/profile/my-services/category"} className="btn btn-primary">
                      + Add Store Category
              </Link>
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
                  <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select category</option> 
                      <option value="open">cat1</option>
                      <option value="close">cat3</option>
                    </Form.Control>
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
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>price</Form.Label>
                      <Form.Control
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Stock Count</Form.Label>
                      <Form.Control
                        type="text"
                        name="Stock Count"
                        value={formData.stockCount}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>created At</Form.Label>
                    <Form.Control
                      type="date"
                      name="createdAt"
                      value={formData.createdAt}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Active</Form.Label>
                    <Form.Check
                      type="checkbox"
                      name="isActive"
                      checked={formData.isActive}
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
