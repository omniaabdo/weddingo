import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import error_img from "../assets/img/error/error-img.jpg";
export default function ErrorPage() {
  return (
    <>
      <section className="error d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="error_text-div col-lg-6 col-md-12 d-flex flex-column text-center  justify-content-center align-items-center">
              <h1>
                <BiError />
                <span className="d-block py-5 text-primary">
                  الصفحة المطلوبة غير موجودة
                </span>
                404
              </h1>
              <p>الصفحة المطلوبة قد تكون خطاء او تم ازالتها </p>
            </div>
            <div className="error_image col-lg-6 d-flex justify-content-center align-items-center">
              <img src={error_img} alt="error Image" width={400} />
            </div>
            <div className="error_buttons col-12 d-flex justify-content-center align-items-center ">
              <Link className="d-block btn btn-primary px-5 py-3" to={"/"}>
                الصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
