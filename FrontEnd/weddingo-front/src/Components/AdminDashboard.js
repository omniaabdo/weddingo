import { Col, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import UserTable from "./admin-components/UserTable";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <>
      <NavBar />
      <section className="admin-dashboard">
        <div className="container" style={{ marginBlock: "6rem" }}>
          <Row className="my-4 align-items-center">
            <Col md={5}>
              <h3>
                <b>المستخدمين</b>
              </h3>
              <p> تم تسجيل 10 مستخدمين حتي الان </p>
            </Col>
            <Col lg={12}>
              <UserTable />
            </Col>
          </Row>
          <Row className="my-5 align-items-center">
            <Col md={4}>
              <h3>
                <b>خدماتي</b>
              </h3>
              <p>تم تسجيل عدد {"55"} خدمة</p>
            </Col>
            <Col md={3} className="me-auto">
              <select className="form-select">
                <option value="">اختر خدمة</option>
                <option value="cars">السيارات</option>
                <option value="venues">القاعات</option>
                <option value="photoshoot-locations">مواقع التصوير</option>
                <option value="store-items">عناصر التجر</option>
                <option value="beauty-center">مركز التجميل</option>
              </select>
            </Col>
            <Col md={12}>
            
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
