import { Col, Row, Button, Placeholder } from "react-bootstrap";
import { FaCheck, FaHeart, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/css/checklist.css";

export default function VendorCardServiceLoading({ img, title, goTo, ICON }) {
  return (
    <>
      <Col md={3} sm={6}>
        <div className="placeholder-glow  card checklist_single-card">
          <span class="placeholder" style={{ height: "100%" }}></span>
        </div>
      </Col>
    </>
  );
}
