import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../../assets/css/photographer-service-details.css";
import {
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import DisplayDateGrid from "./DisplayDateGrid";
import MinBreadcrumb from "../MinBreadcrumb";
import SingleServiceDetailsLoading, {
  CarouselLoading,
  DescriptionContentLoading,
} from "../loading-components/SingleServiceDetailsLoading";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPhotographerApi } from "../../services/store/photographer/photgrapherSingleService";
import AddServicesImageModule from "../modules/AddImagesModule";
import { BASE_URL } from "../../utils/config";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AddPricesFeatures from "../modules/AddPricesFeatures";

export default function PhotographerServiceDetails() {
  const { id } = useParams();
  const { loading, photographer, error } = useSelector(
    (state) => state.singlePhotographerReducer
  );
  const dispatch = useDispatch();
  const [photographerData, setPhotographerData] = useState(null);
  const getUserData = () => {
    dispatch(getPhotographerApi(id));
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (photographer) {
      setPhotographerData(photographer.data);
      console.log("This is data", photographer);
    }
  }, [photographer]);

  /*#region Upload images*/

  const [deleteModuleShow, setDeleteModuleShow] = useState({
    show: false,
    id: "",
  });
  const deleteOnFinshed = () => {
    getUserData();
  };
  const deleteOnShow = () => {
    setDeleteModuleShow({
      show: true,
      id: id,
    });
  };
  const deleteOnHide = () => {
    setDeleteModuleShow({
      show: false,
      id: "",
    });
  };

  /*#endregion Upload images*/

  /*#region add packeges*/

  const [addPackegesModuleShow, setAddPackegesModuleShow] = useState({
    show: false,
    id: "",
  });
  const addPackegesOnFinshed = () => {
    getUserData();
  };
  const addPackegesOnShow = () => {
    setAddPackegesModuleShow({
      show: true,
      id: id,
    });
  };
  const addPackegesOnHide = () => {
    setAddPackegesModuleShow({
      show: false,
      id: "",
    });
  };

  /*#endregion Upload images*/

  return (
    <>
      <section>
        <MinBreadcrumb
          links={[
            { title: "صفحتي", link: "/profile" },
            { title: "اضافة خدمة", link: "/profile/my-services" },
            {
              title: "تفاصيل",
              link: "/profile/my-services/photographer/details",
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
                {photographerData && (
                  <>
                    <Col md={8} lg={8}>
                      {photographerData?.images &&
                        photographerData?.images.length !== 0 && (
                          <>
                            <div className="car-swiper-display">
                              <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                              >
                                {photographerData?.images.map((item) => (
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
                        <p> {photographerData.description}</p>
                      </div>
                      <div className="content-div">
                        <h6>
                          <b>الميزات والخدمات المقدمة</b>
                        </h6>
                        <ul>
                          {photographerData.feature.map((item, index) => (
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
                          {photographerData.packages &&
                          photographerData.packages.length > 0 ? (
                            photographerData.packages.map((pkg, index) => (
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
                        {photographerData?.avalabileDate?.length != 0 ? (
                          <>
                            <DisplayDateGrid
                              selectedDates={photographerData.avalabileDate}
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
                          <Card.Title>{photographerData.name}</Card.Title>
                          <Card.Text className="text-muted text-underline">
                            معلومات الاتصال
                          </Card.Text>
                          <div className=" p-3">
                            <p className="text-muted">
                              <FaPhone />
                              {photographerData?.contacts?.phoneNumber?.map(
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
                                {photographerData.location.city} -{" "}
                                {photographerData.location.state}
                              </span>
                            </p>
                            <ul className="social-media-info-list">
                              {photographerData.contacts.facebookLink && (
                                <li className="facebook-item">
                                  <a
                                    href={
                                      photographerData.contacts.facebookLink
                                    }
                                    className="btn"
                                  >
                                    <FaFacebook />
                                  </a>
                                </li>
                              )}
                              {photographerData.contacts.twitterLink && (
                                <li className="twitter-item">
                                  <a
                                    href={photographerData.contacts.twitterLink}
                                    className="btn"
                                  >
                                    <FaTwitter />
                                  </a>
                                </li>
                              )}
                              {photographerData.contacts.instegramLink && (
                                <li className="instegram-item">
                                  <a
                                    href={
                                      photographerData.contacts.instegramLink
                                    }
                                    className="btn"
                                  >
                                    <FaInstagram />
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>
                          <div className="d-flex flex-column gap-2">
                            <button
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
                            </button>
                            <button className="btn btn-warning text-white w-100 text-center">
                              اضافة اعمال{" "}
                            </button>
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
      <AddServicesImageModule
        onFinshed={deleteOnFinshed}
        servceId={deleteModuleShow.id}
        showNow={deleteModuleShow.show}
        onHide={deleteOnHide}
      />
      <AddPricesFeatures
        onFinshed={addPackegesOnFinshed}
        servceId={addPackegesModuleShow.id}
        showNow={addPackegesModuleShow.show}
        onHide={addPackegesOnHide}
      />
    </>
  );
}
