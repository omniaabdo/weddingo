import { Link, useNavigate } from "react-router-dom";
import apple from "../assets/img/smail-logos/apple.svg";
import facebook from "../assets/img/smail-logos/facebook.svg";
import google from "../assets/img/smail-logos/google.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserApi } from "../services/store/auth/login"; // Adjust the path accordingly

const loginFunctionBTN = (img, text) => {
  return (
    <div className="lgf-single-card card">
      <img src={img} alt="logo" />
      <b> سجل دخول باستخدام {text}</b>
    </div>
  );
};

export default function Login() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { loading, error } = useSelector((state) => state.loginReducer); // Adjust state name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset API error
    setApiError("");

    // Dispatch login action
    dispatch(loginUserApi({ email, password })).then((result) => {
      if (result.payload && result.payload.status === "success") {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: result.payload.token,
            data: {
              name: result.payload.data.user.name,
              email: result.payload.data.user.email,
            },
          })
        );
        window.location.reload();
      } else {
        if (result.error.message === "Incorrect email or password") {
          setApiError("كلمة المرور او البريد عير صحيح"); // Show the error if login fails
        }
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="login-form">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 col-md-10 col-sm-12  m-auto">
            <div className="login-form__form card">
              <div className="img-content"></div>
              <div className="text-content">
                <h4> سجل الدخول الان </h4>
                <p>
                  ليس لديك حساب الان ? <Link to={"/register"}>انضم الينا</Link>
                </p>
                <div className="login-functions">
                  {loginFunctionBTN(facebook, "الفبسبوك")}
                  {loginFunctionBTN(google, " جوجل")}
                </div>
                <p className="tc-devided"> او سجل الان بالبريد الالكتروني</p>

                <form onSubmit={handleLogin}>
                  <div className="mb-2 form-control-sm">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="ادخل البريد الالكتروني ..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="mb-2 form-control-sm">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="ادخل كلمة المرور ..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="">
                    <p className="f-forgrt-password">
                      <Link to={"/forget-password"}>نسيت كلمة السر؟ </Link>
                    </p>
                  </div>
                  {apiError && <p className="text-danger">{apiError}</p>}{" "}
                  {/* Show API error */}
                  <div className="form-button">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={loading}
                    >
                      دخول الان
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
