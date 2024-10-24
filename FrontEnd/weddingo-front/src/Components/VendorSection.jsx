import React from "react";
import { Carousel, Card, Button, Form } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For custom arrow icons
import "../assets/css/Vendor.css"; // Import custom CSS
import img from "../assets/img/services/venue.jpg";

import { BASE_URL } from "../utils/config";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VendorSection = ({ services }) => {
  console.log(services);

  const venues = [
    {
      title: "قصر أشفورد",
      rating: 4.9,
      reviews: 52,
      location: "ألينتاون، نيو جيرسي",
      image: img,
    },
    {
      title: "قصر أشفورد",
      rating: 4.9,
      reviews: 52,
      location: "ألينتاون، نيو جيرسي",
      image: img,
    },
    {
      title: "ويندوز أون ووتر",
      rating: 5.0,
      reviews: 100,
      location: "ميلستون",
      image: img,
    },
    {
      title: "قاعة بالاس",
      rating: 4.8,
      reviews: 40,
      location: "تومز ريفر، نيو جيرسي",
      image: img,
    },
    {
      title: "قاعة بالاس",
      rating: 4.8,
      reviews: 40,
      location: "تومز ريفر، نيو جيرسي",
      image: img,
    },
    // يمكنك إضافة المزيد من القاعات إذا لزم الأمر
  ];

  const vendors = [
    {
      title: "كايترينج فيغ",
      rating: 4.8,
      reviews: 85,
      location: "كولتس نيك، نيو جيرسي",
      image: img,
    },
    {
      title: "ألتيميت كايترير",
      rating: 4.6,
      reviews: 116,
      location: "مارلبورو، نيو جيرسي",
      image: img,
    },
    {
      title: "هاوت فيست",
      rating: 5.0,
      reviews: 10,
      location: "أسابري بارك، نيو جيرسي",
      image: img,
    },
    // يمكنك إضافة المزيد من البائعين إذا لزم الأمر
  ];

  return (
    <section className="profile-vendoer min-section">
      <div className="container">
        <div className="row profile-vendoer_container">
          {/* Venues Section */}
          <div className="col-lg-6 col-sm-12">
            <div className="rounded-container shadow-sm p-4">
              <h5>ابحث عن القاعة المناسبة لك</h5>
              <div className="div-card-subtitle d-flex justify-content-between align-items-center my-3">
                <p>اليك افضل الاقتراحات منا</p>
              </div>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation
                className="profile-vendoer_swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1, // عرض شريحة واحدة على الشاشات الصغيرة
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1.5, // عرض شريحتين عند العرض أكبر من 640 بكسل
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2.5, // عرض 3 شرائح على الشاشات المتوسطة
                    spaceBetween: 10,
                  },
                }}
              >
                {services?.venue &&
                  services?.venue.map((item, index) => (
                    <>
                      <SwiperSlide key={index}>
                        <Card>
                          <div className="card-img-div">
                            <a href="." className="text-decoration-none">
                              <Card.Img
                                variant="top"
                                src={`${BASE_URL}/image/${item.images[0]}`}
                              />
                            </a>
                          </div>
                          <div className="card-text-div">
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              <div className="card-text-subtitle text-muted mb-2">
                                {/* <b>
                                  ⭐ {item.rating} ({item.reviews})
                                </b> */}
                                <Card.Text>
                                  {item.location.state} - {item.location.city}
                                </Card.Text>
                              </div>
                            </Card.Body>
                          </div>
                        </Card>
                      </SwiperSlide>
                    </>
                  ))}
              </Swiper>
              <Link to={"/services/venue"} className="btn btn-info mt-3">
                استكشف المزيد
              </Link>
            </div>
          </div>

          {/* Vendors Section */}
          <div className="col-lg-6 col-sm-12">
            <div className="rounded-container shadow-sm p-4">
              <h5>افضل اماكن التصوير</h5>
              <div className="div-card-subtitle  d-flex justify-content-between align-items-center my-3">
                <p>خلد الذكريات الان في افضل المصورين</p>
                {/* <Form.Select className="w-auto">
                  <option>فلتر الان</option>
                  <option>مصور</option>
                  <option>موسيقي</option>
                  <option>طعام</option>
                </Form.Select> */}
              </div>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation
                className="profile-vendoer_swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1, // عرض شريحة واحدة على الشاشات الصغيرة
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1.5, // عرض شريحتين عند العرض أكبر من 640 بكسل
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2.5, // عرض 3 شرائح على الشاشات المتوسطة
                    spaceBetween: 10,
                  },
                }}
              >
                {services?.photographers &&
                  services?.photographers.map((item, index) => (
                    <>
                      <SwiperSlide key={index}>
                        <Card>
                          <div className="card-img-div">
                            <a href="." className="text-decoration-none">
                              <Card.Img
                                variant="top"
                                src={`${BASE_URL}/image/${item.images[0]}`}
                              />
                            </a>
                          </div>
                          <div className="card-text-div">
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              <div className="card-text-subtitle text-muted mb-2">
                                {/* <b>
                                  ⭐ {item.rating} ({item.reviews})
                                </b> */}
                                <Card.Text>
                                  {item.location.state} - {item.location.city}
                                </Card.Text>
                              </div>
                            </Card.Body>
                          </div>
                        </Card>
                      </SwiperSlide>
                    </>
                  ))}
              </Swiper>
              <Link to={"/services/photographer"} className="btn btn-info mt-3">
                استكشف المزيد
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
