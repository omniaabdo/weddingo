import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import AvailabilityForm from "../photographer-components/AvailabilityForm";
import FeatureForm from "../photographer-components/FeatureForm";
import MinBreadcrumb from "../MinBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { registerVenueApi } from "../../services/store/venue/vendorVenue";
import CustomModules from "../CustomModules";
import { editVenueApi } from "../../services/store/venue/editVenueServices";
import { getVenueApi } from "../../services/store/venue/venueSingleService";

export default function EditVenueVendor() {
  const { id } = useParams();
  const { loading, venue, error } = useSelector(
    (state) => state.singleVenueReducer
  );
  const [formData, setFormData] = useState(null);
  const dispatch = useDispatch();
  const [venueData, setVenueData] = useState(null);
  const getSingleData = () => {
    dispatch(getVenueApi(id));
  };

  useEffect(() => {
    getSingleData();
  }, []);

  useEffect(() => {
    if (venue) {
      setVenueData(venue.data);
      setFormData(venue.data);
    }
  }, [venue]);

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

    // التحقق من السعة
    if (formData.capacity <= 0) {
      newErrors.capacity = "السعة يجب أن تكون رقمًا أكبر من الصفر";
    }

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

    if (formData.price <= 0) newErrors.price = "السعر يجب أن يكون أكثر من صفر";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const {
    loading: editLoading,
    response: editResponce,
    error: editError,
  } = useSelector((state) => state.editVenueReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const editData = { id, venueData: formData };

      dispatch(editVenueApi(editData)).then((result) => {
        if (result.payload.status === "success") {
          console.log(result.payload);

          handleShow({
            type: "success",
            message: "مبروك !!. تم تعديل الخدمة بنجاح",
          });
          getSingleData();
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
              title: "تعديل بيانات قاعة",
              link: `profile/my-services/venue/edit/${id}`,
            },
          ]}
        />
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={6}>
              <h3>
                <b>خدمات قاعات الأفراح</b>
              </h3>
              <p>هنا يمكنك اضافة البيانات الاساسية لقاعة الأفراح</p>
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

                              <Form.Group className="mb-3">
                                <Form.Label>السعة (عدد الأشخاص)</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="capacity"
                                  value={formData.capacity}
                                  onChange={handleChange}
                                  isInvalid={!!errors.capacity}
                                  required
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.capacity}
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
                        </Row>

                        <Row>
                          <Col md={12}>
                            <div className="card p-3 my-1">
                              <h5>الموقع</h5>
                              <Form.Group className="mb-3">
                                <Form.Label>المدينة</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="city"
                                  value={formData.location.city}
                                  onChange={(e) =>
                                    handleNestedChange(e, "location", "city")
                                  }
                                  isInvalid={!!errors.city}
                                  required
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
                                  name="state"
                                  value={formData.location.state}
                                  onChange={(e) =>
                                    handleNestedChange(e, "location", "state")
                                  }
                                  isInvalid={!!errors.state}
                                  required
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.state}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </div>
                          </Col>

                          <Col md={12}>
                            <div className="card p-3 my-1">
                              <h5>السعر وتواريخ التوفر</h5>
                              <Form.Group className="mb-3">
                                <Form.Label>السعر (بالجنيه المصري)</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="price"
                                  value={formData.price}
                                  onChange={handleChange}
                                  isInvalid={!!errors.price}
                                  required
                                  disabled={loading && loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.price}
                                </Form.Control.Feedback>
                              </Form.Group>

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
