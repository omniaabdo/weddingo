import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { registerHomeStoreCategoryApi } from "../../services/store/store-category/storeCategory"; // تأكد من تعديل المسار بناءً على هيكل مشروعك
import MinBreadcrumb from "../MinBreadcrumb";
import CustomModules from "../CustomModules";
import { useDispatch } from "react-redux";

export default function Category() {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // التحقق من صحة النموذج
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "اللاسم مطلوب";
    if (formData.name.length < 3)
      newErrors.name = "اللاسم يجب أن يكون 3 أحرف على الأقل";
    if (formData.name.length > 100)
      newErrors.name = "اللاسم لا يمكن أن يتجاوز 100 حرف";

    if (!formData.description.trim()) newErrors.description = "الوصف مطلوب";
    if (formData.description.length < 10)
      newErrors.description = "الوصف يجب أن يكون 10 أحرف على الأقل";
    if (formData.description.length > 500)
      newErrors.description = "الوصف لا يمكن أن يتجاوز 500 حرف";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(registerHomeStoreCategoryApi(formData)).then((result) => {
        if (result.payload.success) {
          handleShow({
            type: "success",
            message: "تم إضافة الصنف بنجاح",
          });
          setFormData({
            name: "",
            description: ""
          });
        } else {
          handleShow({
            type: "danger",
            message: "حدث خطأ , يرجى المحاولة لاحقًا",
          });
        }
      });
    } else {
      console.log(errors);
    }
  };
  /* ##region Module Massage */
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    type: "",
    message: "",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = (data) => {
    setModalData(data); // تعيين الرسالة
    setShowModal(true); // فتح الـModal
  };

  return (
    <>
      <section className="checklist">
        <MinBreadcrumb
          links={[
            { title: "صفحتي", link: "/profile" },
            { title: "اضافة خدمة", link: "/profile/my-services" },
            {
              title: "اضافة منتجات المتجر",
              link: "/profile/my-services/store",
            },
            { title: "اضافة صنف", link: "/profile/category" },
          ]}
        />
        <div className="container">
          <Row className="align-items-center">
            <Col md={10}>
              <h3>
                <b> إضافة صنف</b>
              </h3>
              <p>هنا يمكنك إضافة بيانات الصنف</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>الاسم</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>الوصف</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="text-end mt-3">
                  <Button variant="primary" type="submit">
                    إضافة الخدمة
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
      <CustomModules
        show={showModal}
        handleClose={handleClose}
        message={modalData.message}
        type={modalData.type}
      />
    </>
  );
}
