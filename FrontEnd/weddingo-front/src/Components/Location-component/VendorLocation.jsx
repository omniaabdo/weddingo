import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerLocationApi } from "../../services/store/location/vendorLocation"; // تأكد من تعديل المسار بناءً على هيكل مشروعك
import AvailabilityForm from "../photographer-components/AvailabilityForm";
import FeatureForm from "../photographer-components/FeatureForm";
import MinBreadcrumb from "../MinBreadcrumb";
import { Link, useNavigate } from "react-router-dom";
import CustomModules from "../CustomModules";

export default function VendorLocation() {
  const { loading, error } = useSelector((state) => state.locationReducer);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "موقع تصوير الملوك",
    description:
      "قاعة أفراح مميزة تتمتع بمساحة واسعة وتصميم فاخر يلائم جميع المناسبات الخاصة. نقدم خدمات شاملة لتلبية احتياجات جميع العملاء، بما في ذلك الديكورات المخصصة وأنظمة الإضاءة والصوت المتطورة. القاعة مجهزة بالكامل لاستضافة عدد كبير من الضيوف بأسلوب يجمع بين الأناقة والفخامة.",
    avalabileDate: [],
    feature: [
      "مساحة واسعة",
      "أنظمة إضاءة وصوت حديثة",
      "ديكورات فاخرة",
      "خدمة ممتازة",
      "مواقف سيارات واسعة",
    ],
    location: {
      city: "القاهرة",
      state: "محافظة القاهرة",
    },
    contacts: {
      phoneNumber: ["1012345678", "1198765432"],
      facebookLink: "https://facebook.com/royalvenue",
      twitterLink: "https://twitter.com/royalvenue",
      instegramLink: "https://instagram.com/royalvenue",
    },
    price: 5000,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (e, field, subField) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: { ...formData[field], [subField]: value },
    });
  };

  const handleSelectedDates = (data) => {
    setFormData({ ...formData, avalabileDate: data });
  };

  const handleFraturesData = (data) => {
    setFormData({ ...formData, feature: data });
  };

  // التحقق من صحة النموذج
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "اسم الموقع مطلوب";
    if (formData.name.length < 3)
      newErrors.name = "اسم الموقع يجب أن يكون 3 أحرف على الأقل";
    if (formData.name.length > 100)
      newErrors.name = "اسم الموقع لا يمكن أن يتجاوز 100 حرف";

    if (!formData.description.trim()) newErrors.description = "الوصف مطلوب";
    if (formData.description.length < 10)
      newErrors.description = "الوصف يجب أن يكون 10 أحرف على الأقل";
    if (formData.description.length > 500)
      newErrors.description = "الوصف لا يمكن أن يتجاوز 500 حرف";

    if (formData.price <= 0)
      newErrors.price = "السعر مطلوب ويجب أن يكون أكبر من صفر";

    const phoneRegex = /^\d{10}$/;
    if (!formData.contacts.phoneNumber.every((num) => phoneRegex.test(num))) {
      newErrors.phoneNumber = "يجب أن يحتوي كل رقم هاتف على 10 أرقام";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form Here');
    
    if (validateForm()) {
      dispatch(registerLocationApi(formData)).then((result) => {
        if (result.payload.status === "success") {
          handleShow({
            type: "success",
            message: "تم إضافة الموقع بنجاح",
          });
          setFormData({
            name: "",
            description: "",
            avalabileDate: [],
            feature: [],
            location: {
              city: "",
              state: "",
            },
            contacts: {
              phoneNumber: [],
              facebookLink: "",
              twitterLink: "",
              instegramLink: "",
            },
            price: 0,
          });
        } else {
          handleShow({
            type: "danger",
            message: "حدث خطأ , يرجى المحاولة لاحقًا",
          });
        }
      });
    }else{
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
  /* ##endregion*/

  return (
    <>
      <section className="checklist">
        <MinBreadcrumb
          links={[
            { title: "صفحتي", link: "/profile" },
            { title: "اضافة خدمة", link: "/profile/my-services" },
            {
              title: "اضافة موقع تصوير",
              link: "/profile/my-services/Location",
            },
          ]}
        />
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={6}>
              <h3>
                <b>إضافة موقع تصوير</b>
              </h3>
              <p>هنا يمكنك إضافة بيانات موقع التصوير</p>
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
                        <Form.Label>اسم الموقع</Form.Label>
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
                          placeholder="1234567890,9876543210"
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

                      <Form.Group className="mb-3">
                        <Form.Label>رابط فيسبوك</Form.Label>
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

                      <Form.Group className="mb-3">
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

                      <Form.Group className="mb-3">
                        <Form.Label>رابط إنستجرام</Form.Label>
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
                    <div className="card p-3 my-1">
                      <AvailabilityForm
                        handleSelectedDates={handleSelectedDates}
                      />
                    </div>
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
