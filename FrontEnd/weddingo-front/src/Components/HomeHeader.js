import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

export default function HomeHeader() {
  return (
    <>
      <header className="home_header">
        <div className="container">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand my-logo" href="#">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to={"/services"}
                    >
                      Venues
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/services"}>
                      Photographers
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/services"}>
                      Bueaty Centers
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/services"}>
                      Locations
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/services"}>
                      Car Rent
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/services"}>
                      Store
                    </Link>
                  </li>
                </ul>
                <div className="reg-log-div">
                  <Link to={"/login"}>Login </Link>
                  <Link to={"/register"}>Join Now</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
