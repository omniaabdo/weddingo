import { Col, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import UserTable from "./admin-components/UserTable";
import { Link } from "react-router-dom";
import AdminServiceCard from "./admin-components/AdminServiceCard";
import "../assets/css/admin-style.css";

import main_img_1 from "../assets/img/single-services/cars/1.jpg";
import main_img_2 from "../assets/img/single-services/cars/2.jpg";
import main_img_3 from "../assets/img/single-services/cars/3.jpg";
import main_img_4 from "../assets/img/single-services/cars/4.jpg";

import user_img_1 from "../assets/img/single-services/photographers/1.jpg";
import user_img_2 from "../assets/img/single-services/photographers/2.jpg";
import user_img_3 from "../assets/img/single-services/photographers/3.jpg";
import user_img_4 from "../assets/img/single-services/photographers/4.jpg";

export default function AdminDashboard() {
  const services_data = [
    {
      main_img: main_img_1,
      title: "سيارة فورد كوبية مجهزة",
      description:
        "سيارة كوبية جميلة من نوع فورد لها سقف متحرك وجاهزة في اي وقت للتحرك واسعاد الاخرين",
      category: "سيارة",
      userdata: {
        img: user_img_1,
        name: "احمد سعيد",
      },
    },
    {
      main_img: main_img_2,
      title: "قاعة احتفالات الملكية",
      description:
        "قاعة فاخرة مخصصة لإقامة الحفلات والمناسبات الكبرى مع أحدث تجهيزات الصوت والإضاءة.",
      category: "قاعة",
      userdata: {
        img: user_img_2,
        name: "محمد علي",
      },
    },
    {
      main_img: main_img_3,
      title: "مصور فوتوغرافي محترف",
      description:
        "مصور فوتوغرافي متخصص في تصوير حفلات الزفاف والمناسبات بخبرة أكثر من 10 سنوات.",
      category: "مصور",
      userdata: {
        img: user_img_3,
        name: "سارة أحمد",
      },
    },
    {
      main_img: main_img_4,
      title: "مركز تجميل للسيدات",
      description:
        "مركز تجميل يقدم خدمات المكياج والعناية بالبشرة باستخدام أحدث التقنيات.",
      category: "مركز تجميل",
      userdata: {
        img: user_img_4,
        name: "ريم خالد",
      },
    },
    {
      main_img: main_img_1,
      title: "سيارة فورد كوبية مجهزة",
      description:
        "سيارة كوبية جميلة من نوع فورد لها سقف متحرك وجاهزة في اي وقت للتحرك واسعاد الاخرين",
      category: "سيارة",
      userdata: {
        img: user_img_1,
        name: "احمد سعيد",
      },
    },
    {
      main_img: main_img_2,
      title: "قاعة احتفالات الملكية",
      description:
        "قاعة فاخرة مخصصة لإقامة الحفلات والمناسبات الكبرى مع أحدث تجهيزات الصوت والإضاءة.",
      category: "قاعة",
      userdata: {
        img: user_img_2,
        name: "محمد علي",
      },
    },
    {
      main_img: main_img_3,
      title: "مصور فوتوغرافي محترف",
      description:
        "مصور فوتوغرافي متخصص في تصوير حفلات الزفاف والمناسبات بخبرة أكثر من 10 سنوات.",
      category: "مصور",
      userdata: {
        img: user_img_3,
        name: "سارة أحمد",
      },
    },
    {
      main_img: main_img_4,
      title: "مركز تجميل للسيدات",
      description:
        "مركز تجميل يقدم خدمات المكياج والعناية بالبشرة باستخدام أحدث التقنيات.",
      category: "مركز تجميل",
      userdata: {
        img: user_img_4,
        name: "ريم خالد",
      },
    },
  ];
  

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
            <Col lg={12}  className={'mt-3'}>
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
            <Col md={12} className="mt-3">
              <Row className="admin-dashboard_cards-contnent">
                {services_data.map((service, index) => (
                  <>
                    <AdminServiceCard
                      main_img={service.main_img}
                      title={service.title}
                      description={service.description}
                      userdata={service.userdata}
                      category={service.category}
                    />
                  </>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
