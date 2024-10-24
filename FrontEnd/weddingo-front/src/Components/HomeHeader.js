import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import NavProfile from "./NavProfile";
import { useEffect, useState } from "react";

export default function HomeHeader({ userData }) {
  
  return (
    <>
      <header className="home_header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand my-logo" href="#">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/services/venue"}
                    >
                      القاعات
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/services/photographer"}>
                      المصورون
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to={"/services/beauty-center"}>
                      مراكز التجميل
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to={"/services/location"}>
                      مواقع التصوير
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/services/car-rent"}>
                      سيارات
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to={"/services/home-store"}>
                      المتجر
                    </Link>
                  </li> */}
                </ul>
                {userData ? (
                  <>
                    <NavProfile userData={userData} />
                  </>
                ) : (
                  <>
                    <div className="reg-log-div">
                      <Link to={"/login"}>تسجيل دخول </Link>
                      <Link to={"/register"}>انضم الينا</Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
