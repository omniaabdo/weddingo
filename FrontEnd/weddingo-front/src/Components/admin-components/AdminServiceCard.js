import { Col } from "react-bootstrap";
import card_img from "../../assets/img/single-services/locations/1.jpg";
import user_img from "../../assets/img/single-services/photographers/1.jpg";

export default function AdminServiceCard({
  main_img,
  title,
  description,
  userdata,
  category,
}) {
  return (
    <>
      <Col lg={3} md={6} sm={6}>
        <div class="card">
          <div className="card-img">
            <span className="card-bages">{category}</span>
            <img src={main_img} class="card-img-top" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <div className="user-data">
              <img src={userdata.img} alt="user img" />
              <h6>{userdata.name}</h6>
            </div>
            <div className="card-buttons d-flex justify-content-between">
              <a href="#" class="btn btn-primary">
                تعديل
              </a>
              <a href="#" class="btn btn-danger">
                حذف
              </a>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
