import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Col, Row, Button } from "react-bootstrap";
import {
  FaCheck,
  FaPhotoVideo,
  FaHotel,
  FaCamera,
  FaCar,
} from "react-icons/fa";
import photographer from "../assets/img/single-services/photographers/4.jpg";
import venue from "../assets/img/single-services/venue/4.jpg";
import location from "../assets/img/single-services/locations/2.jpg";
import car from "../assets/img/single-services/cars/1.jpg";
import { Link } from "react-router-dom";
import "../assets/css/checklist.css";
import VendorCardService from "./VendorCardService";
import VendorCardServiceLoading from "./loading-components/VendorCardServiceLoading";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserServicesApi } from "../services/store/users/getUserServices";
function AddVendor() {
  const { loading, data, error } = useSelector(
    (state) => state.userDataReducer
  );
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const getUserData = () => {
    dispatch(getAllUserServicesApi());
  };

  useEffect(() => {
    getUserData();
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setUserData(data.data);
    }
  }, [data]);

  return (
    <>
      {" "}
      <NavBar />
      <section className=" checklist">
        <div className="container">
          <Row className="my-5 align-items-center">
            <Col md={4}>
              <h3>
                <b>خدماتي</b>
              </h3>
              <p>هنا يمكن اضافة خدمتك لجذب العملاء اليك</p>
            </Col>
            <Col md={8} className="d-flex justify-content-end">
              <div class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الخدمات المتاحة{" "}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      className={"dropdown-item"}
                      to={"/profile/my-services/photographer"}
                    >
                      اضافة مصور
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={"dropdown-item"}
                      to={"/profile/my-services/car"}
                    >
                      اضافة سيارة
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className={"dropdown-item"}
                      to={"/profile/my-services/Venues"}
                    >
                      اضافة قاعة
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className={"dropdown-item"}
                      to={"/profile/my-services/Location"}
                    >
                      اضافة موقع تصوير
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className={"dropdown-item"}
                      to={"/profile/my-services/store"}
                    >
                      اضافة متجر
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className={"dropdown-item"}
                      to={"/profile/my-services/beauty-center"}
                    >
                      اضافة مركز تجميل
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="my-5 align-items-center">
            {loading ? (
              <>
                <VendorCardServiceLoading />
                <VendorCardServiceLoading />
                <VendorCardServiceLoading />
                <VendorCardServiceLoading />
              </>
            ) : (
              <>
                {error ? (
                  <>
                    <p>حدث خطأ أثناء تحميل البيانات، الرجاء المحاولة لاحقًا.</p>
                  </>
                ) : (
                  <>
                    {userData?.photographers?.length > 0 ? (
                      userData.photographers.map((item) => (
                        <VendorCardService
                          key={item._id} // تأكد من وجود key فريدة لكل عنصر
                          img={item.images || photographer}
                          title={item.name}
                          goTo={`/profile/my-services/photographer/details/${item._id}`}
                          ICON={FaCamera}
                        />
                      ))
                    ) : (
                      <p>لا يوجد خدمات مضافة</p>
                    )}
                  </>
                )}
              </>
            )}
            {/* <VendorCardService
              img={photographer}
              title={"مصور"}
              goTo={"/profile/my-services/photographer/details"}
              ICON={FaCamera}
            />
            <VendorCardService
              img={car}
              title={"سيارة للايجار"}
              goTo={"/profile/my-services/car/details"}
              ICON={FaCar}
            />
            <VendorCardService
              img={venue}
              title={"قاعة افراح"}
              goTo={"/profile/my-services/car/details"}
              ICON={FaHotel}
            />
            <VendorCardService
              img={location}
              title={"موقع تصوير"}
              goTo={"/profile/my-services/car/details"}
              ICON={FaPhotoVideo}
            /> */}
          </Row>
        </div>
      </section>
    </>
  );
}
export default AddVendor;
