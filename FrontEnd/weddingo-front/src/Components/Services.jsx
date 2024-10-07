import React from "react";
import "../assets/css/services.css";
import photo1 from "../assets/img/services/1.png";
import photo2 from "../assets/img/services/2.jpeg";
import photo3 from "../assets/img/services/3.jpeg";
import photo4 from "../assets/img/services/4.jpeg";
import photo6 from "../assets/img/services/6.jpeg";
import photo8 from "../assets/img/services/8.jpeg";
import photo14 from "../assets/img/services/14.jpeg";
import photo15 from "../assets/img/services/15.jpeg";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import FilterType, { FilterCapacity } from "./FilterType";

export default function Services() {
  const venues = [
    {
      images: [photo1, photo14],
      title: "Quiet Cannon",
      rating: 3.8,
      location: "Montebello, CA",
      priceRange: "$7,000 - $8,450",
      features: ["Ceremony/Reception", "Indoor", "Get Ready Rooms", "Clean Up"],
      peopleCapacity: null,
    },
    {
      images: [photo2, photo1],
      title: "Metropol Banquet",
      rating: 4.9,
      location: "Glendale, CA",
      priceRange: "",
      features: [
        "Ceremony/Reception",
        "Indoor",
        "Get Ready Rooms",
        "Clean Up",
        "Accommodations",
      ],
      peopleCapacity: 300,
    },
    {
      images: [photo3, photo4],

      title: "LA Banquets - The Landmark",
      rating: 5.0,
      location: "Mission Hills, CA",
      priceRange: "",
      features: [
        "Ceremony/Reception",
        "Indoor",
        "Outdoor",
        "Get Ready Rooms",
        "Clean Up",
      ],
      peopleCapacity: null,
    },
    {
      images: [photo15, photo14],

      title: "Quiet Cannon",
      rating: 3.8,
      location: "Montebello, CA",
      priceRange: "$7,000 - $8,450",
      features: ["Ceremony/Reception", "Indoor", "Get Ready Rooms", "Clean Up"],
      peopleCapacity: null,
    },
    {
      images: [photo6, photo14],

      title: "Metropol Banquet",
      rating: 4.9,
      location: "Glendale, CA",
      priceRange: "",
      features: [
        "Ceremony/Reception",
        "Indoor",
        "Get Ready Rooms",
        "Clean Up",
        "Accommodations",
      ],
      peopleCapacity: 300,
    },
  ];

  return (
    <div className="services pt-5">
      <div className="container">
        <h2 className="text-center">Wedding Dress Photos</h2>
        <p className="subtitle ">
          Whether you’re looking for lace or satin, floor-length or short,
          off-the-shoulder or strapless, WeddingWire has over 8,000 wedding
          dresses to choose from. You can search for styles in every silhouette,
          including mermaid, ball gown, a-line and more. Search for beach or
          vintage-inspired wedding dresses and beyond. WeddingWire lists wedding
          dresses from more than 100 designers and wedding dress prices ranging
          from less than $700 to over $5,000.
        </p>
        <div className="row mt-5">
          <div className="col-12">
            <div className="row">
              <div className="services_filter col-lg-3 col-md-12 col-sm-12">
                <p>FILTERS</p>
                <FilterType />
                <FilterCapacity />
              </div>
              <div className="services_content col-lg-9 col-md-12 col-sm-12">
                <div className=" row d-flex flex-wrap">
                  {venues.map((venue, index) => (
                    <ServiceCard key={index} {...venue} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="services-card">
          <div>
            <Link to="service-detail" className='link-service'>
              <img src={photo1} className="card-service" alt="logo" />
              <h4 className="service-card-name">مكان 123</h4>
              <p className="service-card-price">7007</p>
            </Link>
          </div>
          <div>
            <img src={photo2} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 34</h4>
            <p className="service-card-price">78000</p>
          </div>
          <div>
            <img src={photo3} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 7856</h4>
            <p className="service-card-price">10050</p>
          </div>
          <div>
            <img src={photo4} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 56</h4>
            <p className="service-card-price">70000</p>
          </div>
          <div>
            <img src={photo6} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 12</h4>
            <p className="service-card-price">2133</p>
          </div>
          <div>
            <img src={photo8} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 8756</h4>
            <p className="service-card-price">2333</p>
          </div>
          <div>
            <img src={photo14} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 66</h4>
            <p className="service-card-price">30000</p>
          </div>
          <div>
            <img src={photo15} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 443</h4>
            <p className="service-card-price">23000</p>
          </div>
          <div>
            <img src={photo1} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 123</h4>
            <p className="service-card-price">7007</p>
          </div>
          <div>
            <img src={photo2} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 34</h4>
            <p className="service-card-price">78000</p>
          </div>
          <div>
            <img src={photo3} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 7856</h4>
            <p className="service-card-price">10050</p>
          </div>
          <div>
            <img src={photo4} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 56</h4>
            <p className="service-card-price">70000</p>
          </div>
          <div>
            <img src={photo6} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 12</h4>
            <p className="service-card-price">2133</p>
          </div>
          <div>
            <img src={photo8} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 8756</h4>
            <p className="service-card-price">2333</p>
          </div>
          <div>
            <img src={photo14} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 66</h4>
            <p className="service-card-price">30000</p>
          </div>
        </div> */}
    </div>
  );
}
