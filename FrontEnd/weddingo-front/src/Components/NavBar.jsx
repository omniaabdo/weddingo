import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaClipboardList,
  FaDollarSign,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import "../assets/css/WeddingNavBar.css";
import { Navbar, Nav } from "react-bootstrap";
// const NavBar = () => {
//   return (
//     <div className="container">
//       <Navbar expand="lg" className="navbar-custom">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto nav-custom">
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item-custom">
//                   <NavLink
//                     className="nav-link"
//                     to={"/profile"}
//                     activeClassName="active"
//                   >
//                     <center>
//                       <FaHeart />
//                     </center>
//                     My Wedding
//                   </NavLink>
//                 </li>
//                 <li className="nav-item-custom">
//                   <NavLink
//                     className="nav-link"
//                     to="/profile/vendor-manager"
//                     activeClassName="active"
//                   >
//                     <center>
//                       <FaUsers />
//                     </center>
//                     Vendor Manager
//                   </NavLink>
//                 </li>
//                 <li className="nav-item-custom">
//                   <NavLink
//                     className="nav-link"
//                     to="/profile/checklist"
//                     activeClassName="active"
//                   >
//                     <center>
//                       <FaClipboardList />{" "}
//                     </center>
//                     Checklist
//                   </NavLink>
//                 </li>
//                 <li className="nav-item-custom">
//                   <NavLink
//                     className="nav-link"
//                     to="/profile/budget"
//                     activeClassName="active"
//                   >
//                     <center>
//                       <FaDollarSign />
//                     </center>
//                     Budget
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

const NavBar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <div className="profile-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="profile-nav_list">
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
                <li className="nav-item-custom">
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
                </li>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
