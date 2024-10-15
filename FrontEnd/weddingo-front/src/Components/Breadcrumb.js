import { Link } from "react-router-dom";

export default function Breadcrumb({ title, active_link, active_title }) {
  return (
    <>
      <section className="min-section breadcrumb ">
        <div className="container d-flex align-items-center justify-content-center text-center">
          <div className="breadcrumb_content">
            <Link to={"/"} className="breadcrumb_content-link">
              الرئيسية
            </Link>
            <Link
              to={`/${active_link}`}
              className="breadcrumb_content-link active"
            >
              {active_title}
            </Link>
          </div>
          <h1>
            <b>{title}</b>
          </h1>
        </div>
      </section>
    </>
  );
}
