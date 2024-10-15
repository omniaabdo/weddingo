import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "../../assets/css/car-service-details.css";
import {
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import DisplayDateGrid from "../photographer-components/DisplayDateGrid";
import MinBreadcrumb from "../MinBreadcrumb";
import car_img_1 from "../../assets/img/single-services/cars/1.jpg";
import car_img_2 from "../../assets/img/single-services/cars/2.jpg";
import car_img_3 from "../../assets/img/single-services/cars/3.jpg";
import car_img_4 from "../../assets/img/single-services/cars/4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function CarRentServiceDetails() {
  const [data, setData] = useState({
    name: "سيارة للايجار",
    description: "وصف للسيارة ",
    avalabileFrom: ["2024-10-10", "2024-10-15", "2024-10-20", "2024-10-25"], // أمثلة لتواريخ متاحة
    feature: [
      "Feature1",
      "Feature2",
      "Feature1",
      "Feature2",
      "Feature1",
      "Feature2",
    ],
    isAvailable: true,
    location: {
      city: "القاهرة ",
      state: "مصر",
    },
    contacts: {
      phoneNumber: [1234567890],
      facebookLink: "https://facebook.com/sample",
      twitterLink: "https://twitter.com/sample",
      instegramLink: "https://instagram.com/sample",
    },
    images: [car_img_1, car_img_2, car_img_3, car_img_4],
  });
  return (
    <>
      <section>
        <MinBreadcrumb
          links={[
            { title: "صفحتي", link: "/profile" },
            { title: "اضافة خدمة", link: "/profile/my-services" },
            {
              title: "تفاصيل",
              link: "/profile/my-services/car/details",
            },
          ]}
        />
        <div className="container">
          <Row className="mt-3">
            <Col md={8} lg={8}>
              <div className="car-swiper-display">
                <Swiper
                  // breakpoints={{
                  //   320: {
                  //     slidesPerView: 1, // عرض شريحة واحدة على الشاشات الصغيرة
                  //     spaceBetween: 10,
                  //   },
                  //   640: {
                  //     slidesPerView: 2, // عرض شريحتين عند العرض أكبر من 640 بكسل
                  //     spaceBetween: 20,
                  //   },
                  //   768: {
                  //     slidesPerView: 3, // عرض 3 شرائح على الشاشات المتوسطة
                  //     spaceBetween: 30,
                  //   },
                  // }}
                  // install Swiper modules
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                >
                  {data.images.map((item) => (
                    <>
                      <SwiperSlide>
                        <div>
                          <img src={item} alt="" />
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
                </Swiper>
              </div>
              <div className="content-div">
                <h6>
                  <b>التفاصيل</b>
                </h6>
                <p> {data.description}</p>
              </div>
              <div className="content-div">
                <h6>
                  <b>الميزات والخدمات المقدمة</b>
                </h6>
                <ul>
                  {data.feature.map((item, index) => (
                    <>
                      <li key={index}>
                        <span>
                          <FaCheck />
                        </span>
                        {item}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className="content-div">
                <h6>
                  <b>الايام المتاحة</b>
                </h6>
                <DisplayDateGrid selectedDates={data.avalabileFrom} />
              </div>
            </Col>
            <Col md={8} lg={4}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text className="text-muted text-underline">
                    معلومات الاتصال
                  </Card.Text>
                  <div className=" p-3">
                    <p className="text-muted">
                      <FaPhone />
                      <span className=" px-2 text-underline">
                        {data.contacts.phoneNumber}
                      </span>
                    </p>
                    <p className="text-muted">
                      <FaLocationArrow />
                      <span className=" px-2 text-underline">
                        {data.location.city} - {data.location.state}
                      </span>
                    </p>
                    <ul className="social-media-info-list">
                      <li className="facebook-item">
                        <a href={data.contacts.facebookLink} className="btn">
                          <FaFacebook />
                        </a>
                      </li>
                      <li className="twitter-item">
                        <a href={data.contacts.twitterLink} className="btn">
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="instegram-item">
                        <a href={data.contacts.instegramLink} className="btn">
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <button className="btn btn-primary w-100 text-center">
                     اضافة عروض
                    </button>
                    <button className="btn btn-secondary w-100 text-center">
                      اضافة اعمال
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
