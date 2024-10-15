import React from "react";
// import "../../assets/css/service-card.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServiceCardLoading({
  images,
  title,
  rating,
  location,
  priceRange,
  features,
  peopleCapacity,
}) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div
        class="card"
        aria-hidden="true"
        style={{ height: "550px", margin: "20px" }}
      >
        <span class="placeholder" style={{ padding: "7rem" }}></span>
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-12"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-11"></span>
            <span class="placeholder col-10"></span>
            <span class="placeholder col-9"></span>
            <span class="placeholder col-8"></span>
            <span class="placeholder col-7"></span>
            <span class="placeholder col-6"></span>
          </p>
          <a
            class="btn btn-primary disabled placeholder col-6"
            aria-disabled="true"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardLoading;
