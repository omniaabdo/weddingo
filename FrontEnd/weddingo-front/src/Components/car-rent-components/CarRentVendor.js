import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import AvailabilityForm from "../photographer-components/AvailabilityForm";
import FeatureForm from "../photographer-components/FeatureForm";
import MinBreadcrumb from "../MinBreadcrumb";
import CustomModules from "../CustomModules";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerCarRentApi } from "../../services/store/car-rent/vendorCarRent";

export default function CarRentVendor() {
  const { loading, error } = useSelector((state) => state.carRentReducer);

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: "تويوتا كورولا",
    description:
      "تويوتا كورولا هي سيارة عائلية اقتصادية تتميز بالراحة والاعتمادية. تعتبر من أفضل السيارات في فئتها من حيث استهلاك الوقود والتجهيزات الداخلية. مجهزة بأحدث أنظمة السلامة والأمان مثل نظام الفرامل المانع للانغلاق (ABS) ونظام التحكم في الثبات. تتيح هذه السيارة تجربة قيادة سلسة على الطرق السريعة والطرق الداخلية بفضل المحرك الاقتصادي ونظام التعليق المريح. إنها خيار مثالي للرحلات العائلية والتنقل اليومي في المدينة.",
    brand: "تويوتا",
    type: "سيدان",
    year: "2022",
    color: "أبيض",
    seatCapacity: "5",
    priceParDay: "300",
    avalabileDate: [
      "2024-10-20",
      "2024-10-21",
      "2024-10-22",
      "2024-10-23",
      "2024-10-31",
      "2024-11-01",
      "2024-11-02",
    ],
    feature: [
      "تكييف هواء",
      "نظام GPS",
      "نظام صوتي ممتاز",
      "كاميرا خلفية للمساعدة في الركن",
      "نظام بلوتوث لتوصيل الهاتف",
      "مقاعد جلدية فاخرة",
      "نظام تثبيت السرعة",
    ],
    isAvailable: true,
    location: {
      city: "القاهرة",
      state: "القاهرة الكبرى",
    },
    contacts: {
      phoneNumber: ["0123456789", "0987654321"],
      facebookLink: "https://facebook.com/car-rental",
      twitterLink: "https://twitter.com/car-rental",
      instegramLink: "https://instagram.com/car-rental",
    },
  });

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
    if (!formData.type.trim()) newErrors.type = "نوع السيارة مطلوب";
    if (!formData.year.trim()) newErrors.year = "سنة الصنع مطلوبة";
    if (!formData.color.trim()) newErrors.color = "لون السيارة مطلوب";
    if (!formData.seatCapacity.trim())
      newErrors.seatCapacity = "سعة المقاعد مطلوبة";
    if (!formData.priceParDay.trim())
      newErrors.priceParDay = "السعر لكل يوم مطلوب";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(registerCarRentApi(formData)).then((result) => {
        if (result.payload.status === "success") {
          console.log(result.payload);

          handleShow({
            type: "success",
            message: "مبروك !!. تم انشاء الخدمة بنجاح",
          });
          setFormData({
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
              title: "اضافة سيارة",
              link: "/profile/my-services/car",
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
            </Col>
          </Row>
          <Row>
            <Col>
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
                        value={formData.type}
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
                        type="text"
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
                    <FeatureForm handleFraturesData={handleFraturesData} />
                  </Col>
                  <Col md={12}>
                    <h5>معلومات الاتصال</h5>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
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
                          handleNestedChange(e, "contacts", "facebookLink")
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
                          handleNestedChange(e, "contacts", "twitterLink")
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
                          handleNestedChange(e, "contacts", "instegramLink")
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
                >
                  إرسال
                </Button>
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
