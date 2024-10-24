import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import AvailabilityForm from "./AvailabilityForm";
import FeatureForm from "./FeatureForm";
import MinBreadcrumb from "../MinBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomModules from "../CustomModules";
import { getPhotographerApi } from "../../services/store/photographer/photgrapherSingleService";
import { editPhotographerApi } from "../../services/store/photographer/editPhotographerServices";

export default function EditPhotographer() {
  const { id } = useParams();
  const { loading, photographer, error } = useSelector(
    (state) => state.singlePhotographerReducer
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);

  const getUserData = () => {
    dispatch(getPhotographerApi(id));
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (photographer) {
      setFormData(photographer.data);
      console.log(photographer.data);
    }
  }, [photographer]);

  const [errors, setErrors] = useState({});

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

  // التحقق من صحة النموذج
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!formData.description.trim()) newErrors.description = "الوصف مطلوب";
    if (!formData.location.city.trim()) newErrors.city = "المدينة مطلوبة";
    if (!formData.location.state.trim()) newErrors.state = "الولاية مطلوبة";

    const phoneRegex = /^\d+$/;
    if (!formData.contacts.phoneNumber.every((num) => phoneRegex.test(num))) {
      newErrors.phoneNumber = "رقم الهاتف يجب أن يحتوي على أرقام فقط";
    }

    const urlRegex = /^(https?:\/\/)?([\w\d]+\.)?[\w\d]+\.\w{2,}\/?.*$/;
    if (
      formData.contacts.facebookLink &&
      !urlRegex.test(formData.contacts.facebookLink)
    ) {
      newErrors.facebookLink = "رابط فيسبوك غير صحيح";
    }
    if (
      formData.contacts.twitterLink &&
      !urlRegex.test(formData.contacts.twitterLink)
    ) {
      newErrors.twitterLink = "رابط تويتر غير صحيح";
    }
    if (
      formData.contacts.instegramLink &&
      !urlRegex.test(formData.contacts.instegramLink)
    ) {
      newErrors.instegramLink = "رابط إنستجرام غير صحيح";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const {
    loading: editLoading,
    response: editResponce,
    error: editError,
  } = useSelector((state) => state.editPhotographerReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const editData = { id, photographerData: formData };
      dispatch(editPhotographerApi(editData)).then((result) => {
        console.log(result);
        if (result.payload.status === "success") {
          handleShow({
            type: "success",
            message: "مبروك !!. تم تعديل الخدمة بنجاح",
          });

          getUserData();
        } else {
          handleShow({
            type: "danger",
            message: "حدث خطاء , يرجي المحاولة لاحقا",
          });
        }
      });
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
  /* ##endregion*/
  return (
    <>
      <section className="checklist">
        <MinBreadcrumb
          links={[
            { title: "صفحتي", link: "/profile" },
            { title: "اضافة خدمة", link: "/profile/my-services" },
            {
              title: "تعديل بيانات مصور",
              link: `profile/my-services/photographer/edit/${id}`,
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
              <p className="text-danger">
                ملحوظة : الحقول ذات ال * قابلة للتعديل عن طريق اضافة بيانات
                جديدة
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {loading ? (
                <>
                  <p>Loading</p>
                </>
              ) : (
                <>
                  {formData && (
                    <>
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
                                  isInvalid={!!errors.name}
                                  required
                                  disabled={loading && loading}
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
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.description}
                                </Form.Control.Feedback>
                              </Form.Group>

                              <FeatureForm
                                handleFraturesData={handleFraturesData}
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="card p-3 my-1">
                              <h5>جهات الاتصال</h5>
                              <Form.Group className="mb-3">
                                <Form.Label>
                                  أرقام الهاتف (مفصولة بفواصل)
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="123456789,987654321"
                                  onChange={(e) =>
                                    handleNestedChange(
                                      {
                                        ...e,
                                        target: {
                                          value: e.target.value.split(","),
                                        },
                                      },
                                      "contacts",
                                      "phoneNumber"
                                    )
                                  }
                                  isInvalid={!!errors.phoneNumber}
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.phoneNumber}
                                </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>رابط فيسبوك</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={formData.contacts.facebookLink}
                                  onChange={(e) =>
                                    handleNestedChange(
                                      e,
                                      "contacts",
                                      "facebookLink"
                                    )
                                  }
                                  isInvalid={!!errors.facebookLink}
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.facebookLink}
                                </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>رابط تويتر</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={formData.contacts.twitterLink}
                                  onChange={(e) =>
                                    handleNestedChange(
                                      e,
                                      "contacts",
                                      "twitterLink"
                                    )
                                  }
                                  isInvalid={!!errors.twitterLink}
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.twitterLink}
                                </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>رابط إنستجرام</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={formData.contacts.instegramLink}
                                  onChange={(e) =>
                                    handleNestedChange(
                                      e,
                                      "contacts",
                                      "instegramLink"
                                    )
                                  }
                                  isInvalid={!!errors.instegramLink}
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.instegramLink}
                                </Form.Control.Feedback>
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
                                  isInvalid={!!errors.city}
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.city}
                                </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>الولاية</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={formData.location.state}
                                  onChange={(e) =>
                                    handleNestedChange(e, "location", "state")
                                  }
                                  isInvalid={!!errors.state}
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.state}
                                </Form.Control.Feedback>
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
                          disabled={editLoading && editLoading}
                        >
                          {editLoading ? "جاري الارسال ..." : "ارسال"}
                        </Button>
                      </Form>
                    </>
                  )}
                </>
              )}
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
