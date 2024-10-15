import { Link } from "react-router-dom";
import "../assets/css/min-breadcrumb.css";
export default function MinBreadcrumb({ links }) {
  return (
    <>
      <div className="min-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <Link to={"/"}>الرئيسية</Link>
            </li>
            {links.map((item, index) => (
              <>
                <li>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
