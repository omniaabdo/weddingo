import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Col, Row, Button, Modal } from "react-bootstrap";
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
import CustomModulesForAll from "./CustomModulesForAll";
import { deletePhotographerApi } from "../services/store/photographer/deletePhotgrapherService";
import { BASE_URL } from "../utils/config";

function AddVendor() {
  const { loading, data, error } = useSelector(
    (state) => state.userDataReducer
  );
  const { loading: deleteLoading } = useSelector(
    (state) => state.deletePhotgrapherReducer
  );
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const getUserData = () => {
    dispatch(getAllUserServicesApi());
  };

  const deleteService = ({ id, url }) => {
    dispatch(deletePhotographerApi({ id, url })).then((resulte) => {
      if (resulte.payload.status === "success") {
        handleCloseConfromModule();
        handleShow({
          type: "success",
          message: "تم الغاء الخدمة بنجاح",
        });
        getUserData();
      } else {
        handleCloseConfromModule();
        handleShow({
          type: "error",
          message: "حدث خطاء , يرجي المحاولة لاحقا.",
        });
      }
    });
  };

  /* ##region Module Massage */

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    type: "",
    message: "",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = (data) => {
    setModalData(data); // تعيين الرسالة
    setShowModal(true); // فتح الـModal
  };
  /* ##endregion*/

  /* ##region Conform Module */
  const [showConformModule, setShowConformModule] = useState({
    show: false,
    id: "",
  });

  const handleCloseConfromModule = () =>
    setShowConformModule({
      show: false,
      id: "",
    });
  const handleShowConfromModule = (id) => {
    setShowConformModule({
      show: true,
      id: id,
    });
  };

  /* ##endregion*/

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
                    <h3>خدمات التصوير</h3>
                    {userData?.photographers?.length > 0 ? (
                      userData.photographers.map((item) => (
                        <VendorCardService
                          key={item._id} // تأكد من وجود key فريدة لكل عنصر
                          img={
                            `${BASE_URL}/image/${item.images[0]}` ||
                            photographer
                          }
                          title={item.name}
                          goTo={`/profile/my-services/photographer/details/${item._id}`}
                          ICON={FaCamera}
                          id={item._id}
                          deleteService={handleShowConfromModule}
                          url={"photographer"}
                        />
                      ))
                    ) : (
                      <p>لا يوجد خدمات مضافة</p>
                    )}

                    <h3>خدمات تاجير السيارات</h3>

                    {userData?.cars?.length > 0 ? (
                      userData.cars.map((item) => (
                        <VendorCardService
                          key={item._id} // تأكد من وجود key فريدة لكل عنصر
                          img={`${BASE_URL}/image/${item.images[0]}` || car}
                          title={item.name}
                          goTo={`/profile/my-services/car/details/${item._id}`}
                          ICON={FaCar}
                          id={item._id}
                          deleteService={handleShowConfromModule}
                          url={"car-rent"}
                        />
                      ))
                    ) : (
                      <p>لا يوجد خدمات مضافة</p>
                    )}
                    <h3>خدمات القاعات</h3>

                    {userData?.venue?.length > 0 ? (
                      userData.venue.map((item) => (
                        <VendorCardService
                          key={item._id} // تأكد من وجود key فريدة لكل عنصر
                          img={`${BASE_URL}/image/${item.images[0]}` || car}
                          title={item.name}
                          goTo={`/profile/my-services/Venues/details/${item._id}`}
                          ICON={FaHotel}
                          id={item._id}
                          deleteService={handleShowConfromModule}
                          url={"api/venues"}
                        />
                      ))
                    ) : (
                      <p>لا يوجد خدمات مضافة</p>
                    )}
                    <h3>خدمات مواقع التصوير</h3>

                    {userData?.locations?.length > 0 ? (
                      userData.locations.map((item) => (
                        <VendorCardService
                          key={item._id} // تأكد من وجود key فريدة لكل عنصر
                          img={`${BASE_URL}/image/${item.images[0]}` || car}
                          title={item.name}
                          goTo={`/profile/my-services/Location/details/${item._id}`}
                          ICON={FaCheck}
                          id={item._id}
                          deleteService={handleShowConfromModule}
                          url={"location"}
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
      <Modal
        backdrop="static"
        keyboard={false}
        show={showConformModule.show}
        onHide={handleCloseConfromModule}
      >
        <Modal.Header>
          <Modal.Title>الغاء الخدمة</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          احذر جيدا , بالضغط علي موافق سوف يتم الغاء الخدمة من الموقع ؟
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => deleteService(showConformModule.id)}
            disabled={deleteLoading && deleteLoading}
          >
            موافق, الغاء الخدمة
          </Button>
          <Button
            variant="primary"
            disabled={deleteLoading && deleteLoading}
            onClick={handleCloseConfromModule}
          >
            اغلاق النافذة
          </Button>
        </Modal.Footer>
      </Modal>
      <CustomModulesForAll
        show={showModal}
        handleClose={handleClose}
        message={modalData.message}
        type={modalData.type}
      />
    </>
  );
}
export default AddVendor;
