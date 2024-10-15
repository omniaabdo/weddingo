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
        <b> سجل دخول باستخدام {text}</b>
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
          <div className="row ">
            <div className="col-lg-8 col-md-10 col-sm-12  m-auto">
              <div className="login-form__form card">
                <div className="img-content"></div>
                <div className="text-content">
                  <h4> سجل الدخول الان </h4>
                  <p>
                    {" "}
                    ليس لديك حساب الان ?{" "}
                    <Link to={"/register"}>انضم الينا</Link>
                  </p>
                  <div className="login-functions">
                    {loginFunctionBTN(facebook, "الفبسبوك")}
                    {loginFunctionBTN(google, " جوجل")}
                  </div>
                  <p className="tc-devided"> او سجل الان بالبريد الالكتروني</p>

                  <form className="">
                    <div class=" mb-2 form-control-sm">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="ادخل البريد الالكتروني ..."
                      />
                    </div>
                    <div className=" mb-2 form-control-sm">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="ادخل كلمة المرور ..."
                      />
                    </div>
                    <div className="">
                      <p className="f-forgrt-password">
                        {" "}
                        <a href="#">نسيت كلمة السر؟ </a>
                      </p>
                    </div>
                    <div className="form-button">
                      <Link className="btn btn-primary" onClick={setLoginBtn}>
                        دخول الان
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
