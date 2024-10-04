import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaClipboardList, FaDollarSign, FaHeart, FaUsers } from 'react-icons/fa';
import '../assets/css/WeddingNavBar.css';
import { Navbar, Nav } from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar-custom" fixed="top">
            <Navbar.Brand href="#home" className="navbar-brand-custom">Wedding Planner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto nav-custom">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item-custom">
                        <NavLink
                            className="nav-link"
                            to="/my-wedding"
                            activeClassName="active"
                        >
                            <center><FaHeart /></center>
                            My Wedding
                        </NavLink>
                    </li>
                    <li className="nav-item-custom">
                        <NavLink
                            className="nav-link"
                            to="/vendor-manager"
                            activeClassName="active"
                        >
                            <center><FaUsers /></center>
                            Vendor Manager
                        </NavLink>
                    </li>
                    <li className="nav-item-custom">
                        <NavLink
                            className="nav-link"
                            to="/checklist"
                            activeClassName="active"
                        >
                            <center><FaClipboardList /> </center>
                            Checklist
                        </NavLink>
                    </li>
                    <li className="nav-item-custom">
                        <NavLink
                            className="nav-link"
                            to="/budget"
                            activeClassName="active"
                        >
                            <center><FaDollarSign /></center>
                             Budget
                        </NavLink>
                    </li>
                </ul>
            </div>
                  </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
