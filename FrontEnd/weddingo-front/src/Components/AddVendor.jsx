import React from "react";
import NavBar from "./NavBar";
<<<<<<< HEAD
import { Col, Row, Button } from "react-bootstrap";
import { FaCheck, FaPhotoVideo,FaHotel, FaCamera, FaCar } from "react-icons/fa";
=======
import { Col, Row } from "react-bootstrap";
import { FaCamera, FaCar } from "react-icons/fa";
>>>>>>> 91f22a16092f0b43fb861a694444e8db05d11c69
import photographer from "../assets/img/single-services/photographers/4.jpg";
import venue from "../assets/img/single-services/venue/4.jpg";
import car from "../assets/img/single-services/cars/1.jpg";
import beautyCenter from "../assets/img/single-services/beauty-center/beauty.png";
import store from "../assets/img/single-services/store/1.jpg";
import { Link } from "react-router-dom";
import "../assets/css/checklist.css";
import VendorCardService from "./VendorCardService";
function AddVendor() {
  return (
    <>
      {" "}
      <NavBar />
      <section className=" checklist">
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={4}>
              <h3>
                <b>My Services</b>
              </h3>
              <p>here you can add your services</p>
            </Col>
<<<<<<< HEAD
            <Col md={12} className="text-end ms-auto">
=======
            <Col md={7} className="text-end ms-auto">
>>>>>>> 91f22a16092f0b43fb861a694444e8db05d11c69
              <Link
                to={"/profile/my-services/photographer"}
                className="btn btn-primary me-2"
              >
                + Add Photographer
              </Link>
<<<<<<< HEAD
              <Link to={"/profile/my-services/car"} className="btn btn-primary me-3">
                + Add car
              </Link>
              <Link to={"/profile/my-services/Venues"} className="btn btn-primary me-3">
                + Add Venue
              </Link>
              <Link to={"/profile/my-services/Location"} className="btn btn-primary me-3">
                + Add Location
=======
              <Link to={"/profile/my-services/car"} className="btn btn-primary me-2">
                + Add car
              </Link>
              <Link to={"/profile/my-services/beauty-center"} className="btn btn-primary me-2">
                + Add beauty-center
              </Link>
              <Link to={"/profile/my-services/store"} className="btn btn-primary">
                + Add store
>>>>>>> 91f22a16092f0b43fb861a694444e8db05d11c69
              </Link>
            </Col>
          </Row>
          <Row className="my-5 align-items-center">
            <VendorCardService
              img={photographer}
              title={"Photographer"}
              goTo={"/profile/my-services/photographer/details"}
              ICON={FaCamera}
            />
            <VendorCardService
              img={car}
              title={"Car Rent"}
              goTo={"/profile/my-services/car/details"}
              ICON={FaCar}
            />
            <VendorCardService
<<<<<<< HEAD
              img={venue}
              title={"Wedding Venue"}
              goTo={"/profile/my-services/car/details"}
              ICON={FaHotel}
            />
            <VendorCardService
              img={venue}
              title={"Photo Section Location"}
              goTo={"/profile/my-services/car/details"}
              ICON={FaPhotoVideo}
=======
              img={beautyCenter}
              title={"Beauty Center"}
              goTo={"/profile/my-services/beauty-center/details"}
              ICON={FaCar}
            />
            <VendorCardService
              img={store}
              title={"Store"}
              goTo={"/profile/my-services/store/details"}
              ICON={FaCar}
>>>>>>> 91f22a16092f0b43fb861a694444e8db05d11c69
            />
          </Row>
          
        </div>
      </section>
    </>
  );
}
export default AddVendor;
