import React from "react";
import "../assets/css/service-card.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imageStatic from "../../src/assets/img/services/1.png";
import { BASE_URL } from "../utils/config";

function ServiceCard({
  images,
  name,
  rating,
  location,
  price,
  feature,
  peopleCapacity,
  _id,
}) {
  const [routingUrl, setRoutingUrl] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (window.location.href.includes("beauty-center"))
      setRoutingUrl("beauty-center");
    if (window.location.href.includes("location")) setRoutingUrl("location");
    if (window.location.href.includes("photographer"))
      setRoutingUrl("photographer");
    if (window.location.href.includes("car-rent")) setRoutingUrl("car-rent");
    if (window.location.href.includes("home-store"))
      setRoutingUrl("home-store");
    if (window.location.href.includes("venue")) setRoutingUrl("venue");
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card" style={{ minHeight: "440px", margin: "20px" }}>
        {/* Bootstrap Carousel */}
        <Carousel>
          {images
            ? images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={`${BASE_URL}/image/${image}`}
                    alt={`Slide ${index}`}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))
            : ""}
        </Carousel>

        <div className="card-body">
          <h5 className="card-title" style={{ padding: "0px", margin: "0px" }}>
            {name}
          </h5>
          <p className="card-text rating">
            {/* ⭐ {rating}  */}·{" "}
            {location ? `${location.city} - ${location.state}` : ""}
          </p>
          {price ? (
            <p className="card-text price-range">
              <strong> السعر :{price}</strong>
            </p>
          ) : (
            ""
          )}
          <ul className="list-unstyled features">
            {feature
              ? feature.map((feature, index) => (
                  <li key={index}>✔ {feature}</li>
                ))
              : ""}
          </ul>
          {peopleCapacity && (
            <p className="card-text">👥 سعة الاشخاص: {peopleCapacity} فرد</p>
          )}

          <Link
            className="btn btn-primary"
            to={`/services/${routingUrl}/service-detail/${_id}`}
          >
            استكشف المزيد الان
          </Link>

          {/* <p className="text-muted mt-2">⚡ Responds within 24 hours</p> */}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
