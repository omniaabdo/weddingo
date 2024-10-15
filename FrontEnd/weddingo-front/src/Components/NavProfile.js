import persone from "../assets/img/single-services/photographers/1.jpg";
import "../assets/css/nav-profile.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaClipboardList,
  FaDollarSign,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
export default function NavProfile() {
  const navigator = useNavigate();
  const logOut = () => {
    localStorage.setItem("user", false);
    navigator("/login");
  };

  return (
    <>
      <div className="pro-div">
        <img src={persone} alt="" />
        <div className="pro-div_option-list">
          <div className="option-list_persoal-info d-flex align-items-start">
            <img src={persone} alt="" />
            <div>
              <h4>
                مرحبا ,<br /> حسن
              </h4>
            </div>
          </div>
          <div className="option-list_profile-btn">
            <Link to={"/profile"}>صفحتي الشخصية</Link>
          </div>
          <div className="option-list_tools-div">
            <button className="btn">
              <FaUsers />
              البائعون
            </button>
            <button className="btn">
              <FaClipboardList />
              الخدمات
            </button>
            <button className="btn">
              <FaDollarSign />
              الميزانية
            </button>
            <button className="btn"></button>
          </div>
          <div className="option-list_setting">
            <Link onClick={logOut}>تسجيل الخروج</Link>
          </div>
        </div>
      </div>
    </>
  );
}
