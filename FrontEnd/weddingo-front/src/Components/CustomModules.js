// CustomModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomModules = ({ show, handleClose, message, type }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          {type === "success" ? "تم الانشاء" : "حدث خطا"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          اغلاق
        </Button>
        <Link className="btn btn-primary" to={"/profile/my-services"}>
          عرض خدماتي
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModules;
