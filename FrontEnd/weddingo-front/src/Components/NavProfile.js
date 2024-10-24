import persone from "../assets/img/avatar/avatar2.jpg";
import "../assets/css/nav-profile.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaClipboardList,
  FaDollarSign,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import { BASE_URL } from "../utils/config";

export default function NavProfile({ userData }) {
  const [userInfromation, setUserInfromation] = useState(null);
  const userInfo = () => {
    const name = userData.name.split(" ")[0];
    const img = userData.image || "";
    setUserInfromation({
      name,
      img,
    });
  };
  const navigator = useNavigate();
  const logOut = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  };
  useEffect(() => {
    userData && userInfo();
  }, []);
  return (
    <>
      <div className="pro-div">
        {userInfromation?.img && userInfromation?.img !== "" ? (
          <>
            <img
              src={`${BASE_URL}/image/${userInfromation.img}`}
              alt="user Image"
            />
          </>
        ) : (
          <>
            <img src={persone} alt="Avatar Image" />
          </>
        )}

        <div className="pro-div_option-list">
          <div className="option-list_persoal-info d-flex align-items-start">
            {userInfromation?.img && userInfromation?.img !== "" ? (
              <>
                <img
                  src={`${BASE_URL}/image/${userInfromation.img}`}
                  alt="user Image"
                />
              </>
            ) : (
              <>
                <img src={persone} alt="Avatar Image" />
              </>
            )}

            <div>
              <h4>
                مرحبا ,<br /> {userInfromation?.name}
              </h4>
            </div>
          </div>
          {/* <div className="option-list_profile-btn">
            <Link to={"/profile"}>صفحتي الشخصية</Link>
          </div> */}
          <div className="option-list_tools-div">
            <Link className="btn" to={"/profile"}>
              <FaUsers />
              صفحتي
            </Link>
            <Link className="btn" to={"/profile/my-services"}>
              <FaClipboardList />
              الخدمات
            </Link>
            {/* <button className="btn">
              <FaDollarSign />
              الميزانية
            </button> */}
          </div>
          <div className="option-list_setting">
            <Link onClick={logOut}>تسجيل الخروج</Link>
          </div>
        </div>
      </div>
    </>
  );
}
