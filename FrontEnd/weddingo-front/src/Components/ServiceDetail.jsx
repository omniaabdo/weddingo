import React from "react";
import photo15 from "../assets/img/services/15.jpeg";
import "../assets/css/service-detail.css";
import Carousel from "react-bootstrap/Carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import location from "../assets/img/smail-logos/location.svg";
import phone from "../assets/img/smail-logos/phone.svg";

export default function ServiceDetail() {
  return (
    <section className="min-section single-service">
      <div className="container">
        <div className="row py-5 single-service_content">
          <div className="single-service_content-images col-lg-8 col-sm-12 py-5">
            <div className="row">
              <div className="col-12">
                <Carousel
                  prevIcon={
                    <FaChevronLeft className="custom-carousel-arrow-left" />
                  }
                  nextIcon={
                    <FaChevronRight className="custom-carousel-arrow-right" />
                  }
                >
                  <Carousel.Item>
                    <img
                      style={{ objectFit: "cover" }}
                      className="d-block"
                      src={photo15}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ objectFit: "cover" }}
                      className="d-block"
                      src={photo15}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ objectFit: "cover" }}
                      className="d-block"
                      src={photo15}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-12 mt-5 content-type pricing">
                <h4 className="content-type_title">Pricing information</h4>
                <ul className="pricing_list">
                  <li>
                    <i></i> <span>Price range: $7,000 - $8,450</span>
                  </li>
                  <li>
                    <i></i> <span>Couples usually spend $7,750</span>
                  </li>
                </ul>
              </div>
              <div className="col-12 mt-5 content-type pricing">
                <h4 className="content-type_title">Pricing information</h4>
                <ul className="pricing_list">
                  <li>
                    <i></i> <span>Price range: $7,000 - $8,450</span>
                  </li>
                  <li>
                    <i></i> <span>Couples usually spend $7,750</span>
                  </li>
                </ul>
              </div>
              <div className="col-12 mt-5 content-type about">
                <h4 className="content-type_title">about</h4>
                <p>
                  Quiet Cannon is pleased to offer a number of indoor and
                  outdoor event spaces. The gazebo is an excellent location for
                  an outdoor ceremony. The structure is accessed via a paved
                  path that segments the company of seated guests. Flowers and
                  drapes can be added to the gazebo to give it that extra touch
                  of style. Inside, the Crystal Ballroom is comprised of a
                  number of smaller rooms that can be opened up to provide
                  seating for as many as 1,000 people. The space is decorated in
                  the style of a traditional ballroom and features a
                  floral-patterned carpet, a large wooden dance floor, and
                  lovely suspended light fixtures. The Spyglass rooms are a
                  great place to entertain your company after the ceremony. Each
                  room is able to accommodate 160 guests. Together, they offer
                  space for 300. The Spyglass rooms include facilities for all
                  your entertainment needs. They offer a DJ booth, dance floor,
                  and a fixed bar.
                </p>
              </div>
              <div className="col-12 mt-5 content-type FQ">
                <h4 className="content-type_title">Facilities and Capacity</h4>
                <p>
                  Quiet Cannon is pleased to offer a number of indoor and
                  outdoor event spaces. The gazebo is an excellent location for
                  an outdoor ceremony. The structure is accessed via a paved
                  path that segments the company of seated guests. Flowers and
                  drapes can be added to the gazebo to give it that extra touch
                  of style. Inside, the Crystal Ballroom is comprised of a
                  number of smaller rooms that can be opened up to provide
                  seating for as many as 1,000 people. The space is decorated in
                  the style of a traditional ballroom and features a
                  floral-patterned carpet, a large wooden dance floor, and
                  lovely suspended light fixtures. The Spyglass rooms are a
                  great place to entertain your company after the ceremony. Each
                  room is able to accommodate 160 guests. Together, they offer
                  space for 300. The Spyglass rooms include facilities for all
                  your entertainment needs. They offer a DJ booth, dance floor,
                  and a fixed bar.
                </p>
              </div>
            </div>
          </div>
          <div className="single-service_content-details col-lg-4 col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="badge badge-warning">
                    <svg viewBox="0 0 16 17">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.853 1.167h-.002H1.107a.433.433 0 00-.432.396v.005l-.001.01a1.837 1.837 0 00-.006.139c-.001.09 0 .215.013.365.024.296.09.701.26 1.113.172.414.454.845.915 1.171.402.284.916.472 1.562.516v.377a4.55 4.55 0 004.117 4.53v3.728H5.68a.433.433 0 100 .867h4.574a.433.433 0 000-.867H8.401V9.79a4.55 4.55 0 004.117-4.53v-.377c.646-.044 1.16-.232 1.562-.516.46-.326.743-.757.915-1.17.17-.413.236-.818.26-1.114a3.874 3.874 0 00.01-.473l-.003-.03v-.016a.433.433 0 00-.433-.396h-2.742-.002H3.853zm-.435.866H1.547c.02.236.073.537.195.83.124.301.317.585.614.795.246.174.585.313 1.062.355v-1.98zm.866 0h7.368V5.26a3.684 3.684 0 01-7.368 0V2.033zm8.234 0v1.98c.476-.042.816-.18 1.062-.355.297-.21.49-.494.614-.794.122-.294.175-.595.195-.83h-1.87zm-8.185 13.29c0-.24.194-.434.433-.434h6.404a.433.433 0 010 .867H4.766a.433.433 0 01-.433-.433z"
                      ></path>
                    </svg>
                    Couples' Choice Awards
                  </span>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>

                <h3 class="card-title mt-2">Quiet Cannon</h3>

                <div class="rating">
                  <span class="text-warning">⭐⭐⭐⭐</span>
                  <span> 3.8 · 25 reviews</span>
                </div>

                <p className="more">More Data</p>
                <ul className="card-list">
                  <li>
                    <img src={location} />
                    <span>Assuit - New Assuit</span>
                  </li>
                  <li>
                    <img src={phone} />
                    <span>01550005909</span>
                  </li>
                </ul>

                <div class="price-range mt-3">
                  <i class="fa fa-money-bill-wave"></i>
                  $7,000 - $8,450 Price range
                </div>

                <button class="btn btn-primary btn-block mt-3">
                  Request pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
