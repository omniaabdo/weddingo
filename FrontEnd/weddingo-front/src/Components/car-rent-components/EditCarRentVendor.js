import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import AvailabilityForm from "../photographer-components/AvailabilityForm";
import FeatureForm from "../photographer-components/FeatureForm";
import MinBreadcrumb from "../MinBreadcrumb";
import CustomModules from "../CustomModules";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { registerCarRentApi } from "../../services/store/car-rent/vendorCarRent";
import { getCarRentApi } from "../../services/store/car-rent/carRentSingleService";
import { editCarApi } from "../../services/store/car-rent/editCarRentServices";

export default function EditCarRentVendor() {
  const { id } = useParams();
  const { loading, car, error } = useSelector(
    (state) => state.singleCarRentReducer
  );
  const [formData, setFormData] = useState(null);

  const dispatch = useDispatch();
  const [carData, setCarData] = useState(null);
  const getSingleData = () => {
    dispatch(getCarRentApi(id));
  };

  useEffect(() => {
    getSingleData();
  }, []);

  useEffect(() => {
    if (car) {
      setCarData(car.data);
      setFormData(car.data);
    }
  }, [car]);

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

  // Validation function to check if the required fields are filled properly
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "اسم السيارة مطلوب";
    if (!formData.description.trim()) newErrors.description = "الوصف مطلوب";
    if (!formData.brand.trim()) newErrors.brand = "ماركة السيارة مطلوبة";
    if (!formData.carType.trim()) newErrors.carType = "نوع السيارة مطلوب";
    if (!formData.year) newErrors.year = "سنة الصنع مطلوبة";
    if (!formData.color.trim()) newErrors.color = "لون السيارة مطلوب";
    if (!formData.seatCapacity) newErrors.seatCapacity = "سعة المقاعد مطلوبة";
    if (!formData.priceParDay) newErrors.priceParDay = "السعر لكل يوم مطلوب";
    if (!formData.location.city.trim()) newErrors.city = "المدينة مطلوبة";
    if (!formData.location.state.trim()) newErrors.state = "المحافظة مطلوبة";

    // Validate phone numbers (all should be numbers)
    const phoneRegex = /^\d+$/;
    if (!formData.contacts.phoneNumber.every((num) => phoneRegex.test(num))) {
      newErrors.phoneNumber = "رقم الهاتف يجب أن يحتوي على أرقام فقط";
    }

    // Validate URLs
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
  } = useSelector((state) => state.editCarRentReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const editData = { id, CarData: formData };

      dispatch(editCarApi(editData)).then((result) => {
        if (result.payload.status === "success") {
          console.log(result.payload);

          handleShow({
            type: "success",
            message: "مبروك !!. تم تعديل الخدمة بنجاح",
          });
          getSingleData;
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
              title: "تعديل بيانات سيارة",
              link: `profile/my-services/car/edit/${id}`,
            },
          ]}
        />
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={6}>
              <h3>
                <b>خدمات تأجير السيارات</b>
              </h3>
              <p>هنا يمكنك إضافة معلوماتك كمالك للسيارة</p>
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
                          <h5>المعلومات الأساسية</h5>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>اسم السيارة</Form.Label>
                              <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.name}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>ماركة السيارة</Form.Label>
                              <Form.Control
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                isInvalid={!!errors.brand}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.brand}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Group>
                              <Form.Label>الوصف</Form.Label>
                              <Form.Control
                                as="textarea"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                isInvalid={!!errors.description}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.description}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>نوع السيارة</Form.Label>
                              <Form.Control
                                type="text"
                                name="type"
                                value={formData.carType}
                                onChange={handleChange}
                                isInvalid={!!errors.type}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.type}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>سنة الصنع</Form.Label>
                              <Form.Control
                                type="text"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                isInvalid={!!errors.year}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.year}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>لون السيارة</Form.Label>
                              <Form.Control
                                type="text"
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                isInvalid={!!errors.color}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.color}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>سعة المقاعد</Form.Label>
                              <Form.Control
                                type="number"
                                name="seatCapacity"
                                value={formData.seatCapacity}
                                onChange={handleChange}
                                isInvalid={!!errors.seatCapacity}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.seatCapacity}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>السعر لكل يوم</Form.Label>
                              <Form.Control
                                type="number"
                                name="priceParDay"
                                value={formData.priceParDay}
                                onChange={handleChange}
                                isInvalid={!!errors.priceParDay}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.priceParDay}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <FeatureForm
                              handleFraturesData={handleFraturesData}
                            />
                          </Col>
                          <Col md={12}>
                            <h5>معلومات الاتصال</h5>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
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
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.phoneNumber}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>رابط الفيسبوك</Form.Label>
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
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.facebookLink}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col className="mb-3">
                            <Form.Group>
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
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.twitterLink}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>رابط انستجرام</Form.Label>
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
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.instegramLink}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <h5>الموقع</h5>
                          </Col>

                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>المدينة</Form.Label>
                              <Form.Control
                                type="text"
                                value={formData.location.city}
                                onChange={(e) =>
                                  handleNestedChange(e, "location", "city")
                                }
                                isInvalid={!!errors.city}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.city}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>المحافظة</Form.Label>
                              <Form.Control
                                type="text"
                                value={formData.location.state}
                                onChange={(e) =>
                                  handleNestedChange(e, "location", "state")
                                }
                                isInvalid={!!errors.state}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.state}
                              </Form.Control.Feedback>
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
