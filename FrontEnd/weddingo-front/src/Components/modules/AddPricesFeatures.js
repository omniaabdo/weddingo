import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { BASE_URL } from "../../utils/config";

export default function AddPricesFeatures({
  onFinshed,
  servceId,
  showNow,
  onHide,
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [packages, setPackages] = useState([]);

  // إضافة حزمة جديدة
  const addPackage = () => {
    setPackages([...packages, { title: "", price: "" }]);
  };

  // إزالة حزمة معينة
  const removePackage = (index) => {
    setPackages(packages.filter((_, idx) => idx !== index));
  };

  // التعامل مع التغيير في الحقول
  const handlePackageChange = (index, field, value) => {
    const newPackages = [...packages];
    newPackages[index][field] = value;
    setPackages(newPackages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // عملية الرفع هنا
    setIsUploading(true);
    const token = JSON.parse(localStorage.getItem("userData")).token;
    await axios
      .request(`${BASE_URL}/packege/${servceId}`, {
        method: "POST",
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: packages,
      })
      .then((result) => {
        setIsUploading(false);
        setErrorMassage("");
        if (result.data.status === "success") {
          setPackages([]);
          onHide();
          onFinshed();
        } else {
          setErrorMassage("حدث خطاء اثناء الرفع .. حاولا مرة اخري لاحقا");
        }
      })
      .catch((error) => {
        setIsUploading(false);
        setErrorMassage("حدث خطاء اثناء الرفع .. حاولا مرة اخري لاحقا");
      });
  };

  return (
    <>
      <Modal
        className="fade bd-example-modal-lg"
        show={showNow}
        onHide={onHide}
      >
        <Modal.Header>
          <Modal.Title>اضافة باقات للخدمة</Modal.Title>
          {!isUploading && (
            <Button
              variant="secondary"
              className="btn-close d-block m-0 me-auto"
              onClick={() => {
                setPackages([]);
                onHide();
              }}
            ></Button>
          )}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {/* حقل إدخال الباقات */}
            <div className="packages">
              {packages.length == 0 && (
                <>
                  <p>لا يوجد باقات مضافة, اضغط علي زر (اضف باقة جديدة )</p>
                </>
              )}
              {packages.map((pkg, index) => (
                <div key={index} className="package-item mb-3">
                  <Row>
                    <Col lg={12}>
                      <Form.Group>
                        <Form.Label>عنوان الباقة</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="أدخل عنوان الباقة"
                          value={pkg.title}
                          onChange={(e) =>
                            handlePackageChange(index, "title", e.target.value)
                          }
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>سعر الباقة</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="أدخل السعر"
                          value={pkg.price}
                          onChange={(e) =>
                            handlePackageChange(index, "price", e.target.value)
                          }
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md="auto">
                      <Button
                        variant="danger"
                        className="mt-4"
                        onClick={() => removePackage(index)}
                      >
                        حذف
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
            <div
              id="val-image-error"
              classname="invalid-feedback animated fadeInUp"
              style={{ display: "block", color: "#dc3545" }}
            >
              {errorMassage && errorMassage}
            </div>
            {isUploading ? (
              <Button variant="primary" disabled>
                جاري الرفع...
              </Button>
            ) : (
              <>
                <Button
                  variant="warning"
                  className="text-white mt-3 ms-3"
                  onClick={addPackage}
                >
                  إضافة باقة جديدة
                </Button>
                <Button type="submit" variant="primary" className="mt-3">
                  رفع الباقات
                </Button>
              </>
            )}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
