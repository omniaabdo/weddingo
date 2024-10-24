import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel, Table } from "react-bootstrap";
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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarRentApi } from "../../services/store/car-rent/carRentSingleService";
import SingleServiceDetailsLoading, {
  CarouselLoading,
  DescriptionContentLoading,
} from "../loading-components/SingleServiceDetailsLoading";

import { BASE_URL } from "../../utils/config";
export default function UserCarRentServiceDetails() {
  const { id } = useParams();
  const { loading, car, error } = useSelector(
    (state) => state.singleCarRentReducer
  );
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
      console.log("This is data", car);
    }
  }, [car]);

  return (
    <>
      <section>
        <MinBreadcrumb
          links={[
            { title: "تاجير السيارات", link: "/services/car-rent" },
            {
              title: "تفاصيل",
              link: `/services/car-rent/service-detail/${id}`,
            },
          ]}
        />
        <div className="container">
          <Row className="mt-3">
            {loading ? (
              <>
                <Col md={8} lg={8}>
                  <CarouselLoading />
                  <DescriptionContentLoading />
                  <DescriptionContentLoading />
                  <DescriptionContentLoading />
                </Col>
                <Col md={8} lg={4}>
                  <SingleServiceDetailsLoading />
                </Col>
              </>
            ) : (
              <>
                {carData && (
                  <>
                    <Col md={8} lg={8}>
                      {carData?.images && carData?.images.length !== 0 && (
                        <>
                          <div className="car-swiper-display">
                            <Swiper
                              modules={[Navigation, Pagination, A11y]}
                              spaceBetween={30}
                              slidesPerView={1}
                              navigation
                            >
                              {carData?.images.map((item) => (
                                <>
                                  <SwiperSlide>
                                    <div>
                                      <img
                                        src={`${BASE_URL}/image/${item}`}
                                        alt=""
                                      />
                                    </div>
                                  </SwiperSlide>
                                </>
                              ))}
                            </Swiper>
                          </div>
                        </>
                      )}
                      <div className="content-div">
                        <h6>
                          <b>التفاصيل</b>
                        </h6>
                        <p> {carData?.description}</p>
                      </div>
                      <div className="content-div">
                        <Row>
                          <Col md={6}>
                            <Card.Title className="mb-4">
                              <h3>
                                {carData.brand} {carData.carType} -{" "}
                                {carData.year}
                              </h3>
                            </Card.Title>
                          </Col>

                          <Col md={12}>
                            <Table bordered hover>
                              <tbody>
                                <tr>
                                  <td>
                                    <b>الماركة</b>
                                  </td>
                                  <td>{carData.brand}</td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>النوع</b>
                                  </td>
                                  <td>{carData.carType}</td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>سنة الصنع</b>
                                  </td>
                                  <td>{carData.year}</td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>اللون</b>
                                  </td>
                                  <td>{carData.color}</td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>سعة المقاعد</b>
                                  </td>
                                  <td>{carData.seatCapacity}</td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>السعر لكل يوم</b>
                                  </td>
                                  <td>{carData.priceParDay} جنيه</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Col>
                        </Row>
                      </div>
                      <div className="content-div">
                        <h6>
                          <b>الميزات والخدمات المقدمة</b>
                        </h6>
                        <ul>
                          {carData?.feature.map((item, index) => (
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
                          <b>العروض والباقات</b>
                        </h6>
                        <Row xs={1} md={2} lg={3} className="g-4">
                          {carData?.packages && carData?.packages.length > 0 ? (
                            carData?.packages.map((pkg, index) => (
                              <Col key={index}>
                                <Card className="h-100 shadow-sm d-flex ">
                                  <Card.Body className="d-flex flex-column">
                                    <Card.Text>{pkg.title}</Card.Text>
                                    <Card.Text className="mt-auto">
                                      <strong>السعر:</strong> {pkg.price} جنيه
                                    </Card.Text>
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))
                          ) : (
                            <p className="text-center">
                              لا توجد باقات متاحة حالياً.
                            </p>
                          )}
                        </Row>
                      </div>
                      <div className="content-div">
                        <h6>
                          <b>الايام المتاحة</b>
                        </h6>
                        {carData?.avalabileDate?.length != 0 ? (
                          <>
                            <DisplayDateGrid
                              selectedDates={carData.avalabileDate}
                            />
                          </>
                        ) : (
                          <>
                            <p>لا يوجد ايام متاحة </p>
                          </>
                        )}
                      </div>
                    </Col>
                    <Col md={8} lg={4}>
                      <Card className="border-0">
                        <Card.Body>
                          <Card.Title>{carData.name}</Card.Title>
                          <Card.Text className="text-muted text-underline">
                            معلومات الاتصال
                          </Card.Text>
                          <div className=" p-3">
                            <p className="text-muted">
                              <FaPhone />
                              {carData?.contacts?.phoneNumber?.map(
                                (item, index) => (
                                  <>
                                    <span className=" px-2 text-underline">
                                      {item}
                                    </span>
                                  </>
                                )
                              )}
                            </p>
                            <p className="text-muted">
                              <FaLocationArrow />
                              <span className=" px-2 ">
                                {carData.location.city} -{" "}
                                {carData.location.state}
                              </span>
                            </p>
                            <ul className="social-media-info-list">
                              {carData.contacts.facebookLink && (
                                <li className="facebook-item">
                                  <a
                                    href={carData.contacts.facebookLink}
                                    className="btn"
                                  >
                                    <FaFacebook />
                                  </a>
                                </li>
                              )}
                              {carData.contacts.twitterLink && (
                                <li className="twitter-item">
                                  <a
                                    href={carData.contacts.twitterLink}
                                    className="btn"
                                  >
                                    <FaTwitter />
                                  </a>
                                </li>
                              )}
                              {carData.contacts.instegramLink && (
                                <li className="instegram-item">
                                  <a
                                    href={carData.contacts.instegramLink}
                                    className="btn"
                                  >
                                    <FaInstagram />
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>
                          <div className="d-flex flex-column gap-2">
                            {/* <button
                              onClick={deleteOnShow}
                              className="btn btn-primary w-100 text-center"
                            >
                              اضافة صور
                            </button>
                            <button
                              onClick={addPackegesOnShow}
                              className="btn btn-danger w-100 text-center"
                            >
                              اضافة عروض
                            </button> */}
                            {/* <button className="btn btn-warning text-white w-100 text-center">
                              اضافة اعمال{" "}
                            </button> */}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                )}
              </>
            )}
          </Row>
        </div>
      </section>
    </>
  );
}
