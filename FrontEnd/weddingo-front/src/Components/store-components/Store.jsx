import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerHomeStoreApi } from "../../services/store/store/store"; // تأكد من تعديل المسار بناءً على هيكل مشروعك
import { getHomeStoreCategoryApi } from "../../services/store/store-category/storeCategoryService";
import MinBreadcrumb from "../MinBreadcrumb";
import CustomModules from "../CustomModules";
import { Link } from "react-router-dom";

export default function Store() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    stockCount: "",
    price: "",
    createdAt: "",
    isActive: false,
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

    if (formData.price <= 0)
      newErrors.price = "السعر مطلوب ويجب أن يكون أكبر من صفر";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(registerHomeStoreApi(formData)).then((result) => {
        if (result.payload.success) {
          handleShow({
            type: "success",
            message: "تم إضافة المنتج بنجاح",
          });
          setFormData({
            name: "",
            description: "",
            category: "",
            stockCount: "",
            price: "",
            createdAt: "",
            isActive: "",
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

  const { loading, categories, error } = useSelector(
    (state) => state.singleHomeStoreCategoryDataReducer
  );
  const dispatch = useDispatch();
  const [categoriesData, setCategories] = useState(null);
  const getCategooryData = () => {
    dispatch(getHomeStoreCategoryApi());
  };

  useEffect(() => {
    getCategooryData();
  }, []);

  useEffect(() => {
    if (categories) {
      setCategories(categories.data);
      console.log("This is data", categories);
    }
  }, [categories]);

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
          ]}
        />
        <div className="container">
          <Row className="align-items-center">
            <Col md={10}>
              <h3>
                <b> إضافة منتجات المتجر</b>
              </h3>
              <p>هنا يمكنك إضافة بيانات المنتج</p>
            </Col>
            <Col md={2} className="text-end ms-auto">
              <Link to={"/profile/my-services/category"} className="btn btn-primary">
                      + اضف صنف جديد
              </Link>
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

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Label>السعر (بالجنيه المصري)</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        isInvalid={!!errors.price}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.price}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Label>المخزن</Form.Label>
                      <Form.Control
                        type="number"
                        name="stockCount"
                        value={formData.stockCount}
                        onChange={handleChange}
                        isInvalid={!!errors.stockCount}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.stockCount}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
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
                        { categoriesData ? (categoriesData.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))) : ''}
                      </Form.Control>
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
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-end mt-3">
                  <Button variant="primary" type="submit" disabled={loading}>
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
