// CustomModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomModulesForAll = ({ show, handleClose, message, type }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          {type === "success" ? "عملية ناجحة" : "حدث خطا"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          اغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModulesForAll;
