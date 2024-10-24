import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaClipboardList,
  FaDollarSign,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";

import "../assets/css/WeddingNavBar.css";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ role }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <div className="profile-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="profile-nav_list flex-wrap">
                <li className="nav-item-custom">
                  <Link
                    className={`nav-link ${
                      pathname === "/profile" && "active"
                    }`}
                    to={"/profile"}
                  >
                    <center>
                      <FaHeart />
                    </center>
                    الرئيسية
                  </Link>
                </li>
                {/* <li className="nav-item-custom">
                  <Link
                    className={`nav-link ${
                      pathname === "/profile/vendor-manager" && "active"
                    }`}
                    to="/profile/vendor-manager"
                  >
                    <center>
                      <FaUsers />
                    </center>
                    عربتي الخاصة
                  </Link>
                </li> */}

                {role === "user" ? (
                  <>
                    <li className="nav-item-custom">
                      <NavLink
                        className={`nav-link ${
                          pathname === "/profile/budget" && "active"
                        }`}
                        to="/profile/budget"
                      >
                        <center>
                          <FaDollarSign />
                        </center>
                        الميزانية
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item-custom">
                      <Link
                        className={`nav-link ${
                          pathname === "/profile/my-services" && "active"
                        }`}
                        to="/profile/my-services"
                      >
                        <center>
                          <FaClipboardList />{" "}
                        </center>
                        خدماتي
                      </Link>
                    </li>
                  </>
                )}

                {/* <li className="nav-item-custom">
                  <NavLink
                    className={`nav-link ${
                      pathname === "/profile/admin" && "active"
                    }`}
                    to="/profile/admin"
                  >
                    <center>
                      <BiSolidDashboard />
                    </center>
                    الادمن{" "}
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
