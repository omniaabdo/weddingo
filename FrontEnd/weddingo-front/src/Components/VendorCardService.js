import { Col, Row, Button } from "react-bootstrap";
import { FaCheck, FaHeart, FaCamera } from "react-icons/fa";
import photographer from "../assets/img/single-services/photographers/4.jpg";
import { Link } from "react-router-dom";
import "../assets/css/checklist.css";

export default function VendorCardService({ img, title, goTo, ICON }) {
  return (
    <>
      <Col md={3} sm={6}>
        <div className="card checklist_single-card">
          <img src={img} />
          <Link to={`${goTo}`}>
            <ICON />
            {title}
          </Link>
        </div>
      </Col>
    </>
  );
}
