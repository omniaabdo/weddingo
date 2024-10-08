import { Link, useNavigate } from "react-router-dom";
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

export default function Login() {
  const navigator = useNavigate();

  const setLoginBtn = () => {
    const isLogin = localStorage.setItem("user", true);
    console.log(isLogin);
    
    if (isLogin) {
      navigator("/");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="login-form">
        <div className="container">
          <div className="login-form__form card">
            <div className="img-content"></div>
            <div className="text-content">
              <h4> Log in to your account </h4>
              <p>
                {" "}
                Not a member yet? <Link to={"/register"}>Join now</Link>
              </p>
              <div className="login-functions">
                {loginFunctionBTN(facebook, "facebook")}
                {loginFunctionBTN(google, "google")}
                {loginFunctionBTN(apple, "apple")}
              </div>
              <p className="tc-devided"> Or log in with your email</p>

              <form className="">
                <div class=" mb-2 form-control-sm">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="email"
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
                <div className="">
                  <p className="f-forgrt-password">
                    {" "}
                    <a href="#">forget your password?</a>
                  </p>
                </div>
                <div className="form-button">
                  <Link className="btn btn-primary" onClick={setLoginBtn}>
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
