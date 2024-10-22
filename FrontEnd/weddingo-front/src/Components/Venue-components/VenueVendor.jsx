// import React, { useState } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';
// import '../../assets/css/Venueform.css'; // Import the CSS file for custom styles
// import { Button, Col, Form, Row } from "react-bootstrap";
// import AvailabilityForm from "../photographer-components/AvailabilityForm";
// import FeatureForm from "../photographer-components/FeatureForm";
// const VenueForm = ({ onSubmit }) => {
//   const [venueData, setVenueData] = useState({
//     name: '',
//     location: '',
//     capacity: '',
//     description: '',
//     availableDates: [],
//     phone: '',
//       facebook: '',
//       imstgram: '',
//   });

//   const [selectedDates, setSelectedDates] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVenueData({
//       ...venueData,
//       [name]: value,
//     });
//   };

//   const handleDateChange = (dates) => {
//     setSelectedDates(dates);
//     setVenueData({
//       ...venueData,
//       availableDates: dates.map((date) => format(date, 'yyyy-MM-dd')),
//     });
//   };
// const handleFraturesData = (data) => {
//     setFormData({ ...venueData, feature: data });
//   };
//  const handleSelectedDates = (data) => {
//     setFormData({ ...venueData, availableDate: data });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) {
//       onSubmit(venueData);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Add or Update Venue</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           {/* Left Column: Basic Information */}
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 value={venueData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Location</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="location"
//                 value={venueData.location}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Capacity Up To</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 name="capacity"
//                 value={venueData.capacity}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <textarea
//                 className="form-control"
//                 name="description"
//                 value={venueData.description}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//                 <Col md={6} className="mb-3">
//                     <FeatureForm handleFraturesData={handleFraturesData} />
//                   </Col>
//             </div>
//           </div>

//           {/* Right Column: Contact Information */}
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label className="form-label">Phone</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 name="phone"
//                 value={venueData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Facebook</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="socialMedia"
//                 value={venueData.socialMedia}
//                 onChange={handleChange}
//                 required
//               />

//                       </div>
//                       <div className="mb-3">
//               <label className="form-label">Instgram</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="socialMedia"
//                 value={venueData.socialMedia}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//           </div>
//           <div>
//              <Col md={12}>
//                     <div className="card px-3 my-1">
//                       <AvailabilityForm
//                         handleSelectedDates={handleSelectedDates}
//                       />
//                     </div>
//                   </Col>
//           </div>
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default VenueForm;
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import AvailabilityForm from "../photographer-components/AvailabilityForm";
import FeatureForm from "../photographer-components/FeatureForm";
import MinBreadcrumb from "../MinBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerVenueApi } from "../../services/store/venue/vendorVenue";
import CustomModules from "../CustomModules";

export default function VenueVendor() {
  const { loading, error } = useSelector((state) => state.venueReducer);

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: "قاعة الأفراح الملكية",
    description:
      "قاعة أفراح مميزة تتمتع بمساحة واسعة وتصميم فاخر يلائم جميع المناسبات الخاصة. نقدم خدمات شاملة لتلبية احتياجات جميع العملاء، بما في ذلك الديكورات المخصصة وأنظمة الإضاءة والصوت المتطورة. القاعة مجهزة بالكامل لاستضافة عدد كبير من الضيوف بأسلوب يجمع بين الأناقة والفخامة.",
    capacity: 300,
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
      phoneNumber: ["01012345678", "01198765432"],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(registerVenueApi(formData)).then((result) => {
        if (result.payload.status === "success") {
          console.log(result.payload);

          handleShow({
            type: "success",
            message: "مبروك !!. تم انشاء الخدمة بنجاح",
          });
          setFormData({
            name: "",
            description: "",
            capacity: 0, // إعادة تعيين السعة
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
            { title: "اضافة قاعة", link: "/profile/my-services/venue" },
          ]}
        />
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={6}>
              <h3>
                <b>خدمات قاعات الأفراح</b>
              </h3>
              <p>هنا يمكنك اضافة البيانات الاساسية لقاعة الأفراح</p>
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
                            handleNestedChange(e, "contacts", "facebookLink")
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
                            handleNestedChange(e, "contacts", "twitterLink")
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
                            handleNestedChange(e, "contacts", "instegramLink")
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
