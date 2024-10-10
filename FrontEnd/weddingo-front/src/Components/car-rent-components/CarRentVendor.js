import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import AvailabilityForm from "../photographer-components/AvailabilityForm";
import FeatureForm from "../photographer-components/FeatureForm";
import MinBreadcrumb from "../MinBreadcrumb";

export default function CarRentVendor() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    type: "",
    year: "",
    color: "",
    seatCapacity: "",
    priceParDay: "",
    avalabileDate: [""],
    feature: [""],
    isAvailable: true,
    location: {
      city: "",
      state: "",
    },
    contacts: {
      phoneNumber: [""],
      facebookLink: "",
      twitterLink: "",
      instegramLink: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectedDates = (data) => {
    setFormData({ ...formData, avalabileDate: data });
  };

  const handleFraturesData = (data) => {
    setFormData({ ...formData, feature: data });
  };

  const handleNestedChange = (e, field, subField) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: { ...formData[field], [subField]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      {/* <NavBar /> */}
      <section className="checklist">
        <MinBreadcrumb
          links={[
            { title: "Profile", link: "/profile" },
            { title: "Add vendor", link: "/profile/my-services" },
            {
              title: "Car Rent",
              link: "/profile/my-services/car",
            },
          ]}
        />
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={6}>
              <h3>
                <b>Car Rent Services</b>
              </h3>
              <p>here you can add your infromation as car owner </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <h5>Basic Information</h5>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Car Name</Form.Label>
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
                      <Form.Label>Car Brand</Form.Label>
                      <Form.Control
                        type="text"
                        name="brand"
                        value={formData.brand}
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
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Car Type</Form.Label>
                      <Form.Control
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Car Year Made</Form.Label>
                      <Form.Control
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Car Color</Form.Label>
                      <Form.Control
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Seat Capacity</Form.Label>
                      <Form.Control
                        type="text"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Price Bar Day</Form.Label>
                      <Form.Control
                        type="number"
                        name="priceParDay"
                        value={formData.priceParDay}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <FeatureForm handleFraturesData={handleFraturesData} />
                  </Col>
                  <Col md={12}>
                    <h5>Contacts Infromation</h5>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Phone Numbers (Comma separated)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="123456789,987654321"
                        onChange={(e) =>
                          handleNestedChange(
                            {
                              ...e,
                              target: { value: e.target.value.split(",") },
                            },
                            "contacts",
                            "phoneNumber"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Facebook Link</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.contacts.facebookLink}
                        onChange={(e) =>
                          handleNestedChange(e, "contacts", "facebookLink")
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col className="mb-3">
                    <Form.Group>
                      <Form.Label>Twitter Link</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.contacts.twitterLink}
                        onChange={(e) =>
                          handleNestedChange(e, "contacts", "twitterLink")
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Instagram Link</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.contacts.instegramLink}
                        onChange={(e) =>
                          handleNestedChange(e, "contacts", "instegramLink")
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <h5>Location</h5>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.location.city}
                        onChange={(e) =>
                          handleNestedChange(e, "location", "city")
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.location.state}
                        onChange={(e) =>
                          handleNestedChange(e, "location", "state")
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <div className="card px-3 my-1">
                      <AvailabilityForm
                        handleSelectedDates={handleSelectedDates}
                      />
                    </div>
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
