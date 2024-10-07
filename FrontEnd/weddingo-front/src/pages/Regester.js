import { Link } from "react-router-dom";
import apple from "../assets/img/smail-logos/apple.svg";
import facebook from "../assets/img/smail-logos/facebook.svg";
import google from "../assets/img/smail-logos/google.svg";
import { useEffect } from "react";

const loginFunctionBTN = (img, text) => {
  return (
    <>
      <div className="lgf-single-card card">
        <img src={img} alt="apple Logo" />
        <b> Sign in with {text}</b>
      </div>
    </>
  );
};

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="register-form">
        <div className="container">
          <div className="register-form__form card">
            <div className="img-content"></div>
            <div className="text-content">
              <div className="login-functions">
                {loginFunctionBTN(facebook, "facebook")}
                {loginFunctionBTN(google, "google")}
                {loginFunctionBTN(apple, "apple")}
              </div>
              <hr />
              <h6 className="py-1"> Or sign up with your email </h6>

              <form>
                <div class=" mb-2 form-control-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Frist and last name"
                  />
                </div>
                <div class=" mb-2 form-control-sm">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email"
                  />
                </div>
                <div className=" mb-2 form-control-sm">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-2 form-control-sm">
                  <select class="form-control" id="selelct-input-form">
                    <option selected>Select Service Type </option>
                    <option>Bride/Groom</option>
                    <option>Car Rint</option>
                    <option>Venues Owner</option>
                    <option>Photographers</option>
                    <option>Location Owner</option>
                    <option>bueaty Center Owner</option>
                    <option>Store Owner</option>
                  </select>
                </div>
                {/* <div className=" mb-2 form-control-sm row">
                  <div className="col-6">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Wedding date"
                    />
                  </div>
                </div> */}
                <div className="form-button pt-4">
                  <button className="btn btn-primary">Sign up</button>
                </div>
                <div className="login-goto">
                  <p className="">
                    Already have an accout ?<Link to={"/login"}> Log in</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
