import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import NavBar from "../NavBar";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { useState } from "react";
import AvailabilityForm from "./AvailabilityForm";
import FeatureForm from "./FeatureForm";
import MinBreadcrumb from "../MinBreadcrumb";

export default function PhotographerVendor() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
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
            { title: "صفحتي", link: "/profile" },
            { title: "اضافة خدمة", link: "/profile/my-services" },
            {
              title: "اضافة مصور",
              link: "/profile/my-services/photographer",
            },
          ]}
        />
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={6}>
              <h3>
                <b>خدمات المصور</b>
              </h3>
              <p>هنا يمكنك اضافة البيانات الاساسية لمصور حفلات الزفاف</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="card p-3 my-1">
                      <h5>المعلومات الأساسية</h5>
                      <Form.Group className="mb-3">
                        <Form.Label>الاسم</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>الوصف</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <FeatureForm handleFraturesData={handleFraturesData} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card p-3 my-1">
                      <h5>جهات الاتصال</h5>
                      <Form.Group className="mb-3">
                        <Form.Label>أرقام الهاتف (مفصولة بفواصل)</Form.Label>
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

                      <Form.Group className="mb-3">
                        <Form.Label>رابط فيسبوك</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.contacts.facebookLink}
                          onChange={(e) =>
                            handleNestedChange(e, "contacts", "facebookLink")
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>رابط تويتر</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.contacts.twitterLink}
                          onChange={(e) =>
                            handleNestedChange(e, "contacts", "twitterLink")
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>رابط إنستجرام</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.contacts.instegramLink}
                          onChange={(e) =>
                            handleNestedChange(e, "contacts", "instegramLink")
                          }
                        />
                      </Form.Group>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="card p-3 my-1">
                      <h5>الموقع</h5>
                      <Form.Group className="mb-3">
                        <Form.Label>المدينة</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.location.city}
                          onChange={(e) =>
                            handleNestedChange(e, "location", "city")
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>الولاية</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.location.state}
                          onChange={(e) =>
                            handleNestedChange(e, "location", "state")
                          }
                        />
                      </Form.Group>
                    </div>
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
                  إرسال
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
