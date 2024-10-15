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
export default function PhotographerServiceDetails() {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    name: "Sample Name",
    description: "This is a sample description for the item.",
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
      city: "Cairo",
      state: "Egypt",
    },
    contacts: {
      phoneNumber: [1234567890],
      facebookLink: "https://facebook.com/sample",
      twitterLink: "https://twitter.com/sample",
      instegramLink: "https://instagram.com/sample",
    },
  });

  const endLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    endLoading();
  }, []);

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
                <Col md={8} lg={8}>
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
                            <a
                              href={data.contacts.facebookLink}
                              className="btn"
                            >
                              <FaFacebook />
                            </a>
                          </li>
                          <li className="twitter-item">
                            <a href={data.contacts.twitterLink} className="btn">
                              <FaTwitter />
                            </a>
                          </li>
                          <li className="instegram-item">
                            <a
                              href={data.contacts.instegramLink}
                              className="btn"
                            >
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
                          اضافة اعمال{" "}
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )}
          </Row>
        </div>
      </section>
    </>
  );
}
