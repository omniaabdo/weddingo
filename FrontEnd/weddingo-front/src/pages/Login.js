import { Link, useNavigate } from "react-router-dom";
import apple from "../assets/img/smail-logos/apple.svg";
import facebook from "../assets/img/smail-logos/facebook.svg";
import google from "../assets/img/smail-logos/google.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, facebookLogin, googleLogin } from "../services/authService"; // Adjust the path accordingly

const loginFunctionBTN = (img, text, onClick) => {
  return (
    <div className="lgf-single-card card" onClick={onClick}>
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setApiError("");

    try {
      const result = await loginUser({ email, password });
      if (result.status === "success") {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: result.token,
            data: {
              name: result.data.user.name,
              email: result.data.user.email,
            },
          })
        );
        window.location.reload();
      }
    } catch (error) {
      setApiError(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    // Implement Facebook login logic here
    // Use Facebook's SDK to get the access token and user ID
    const accessToken = 'your_access_token'; // Replace with the access token from Facebook SDK
    const userID = 'your_user_id'; // Replace with the user ID from Facebook SDK
    try {
      const result = await facebookLogin(accessToken, userID);
      if (result.status === "success") {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: result.token,
            data: {
              name: result.data.user.name,
              email: result.data.user.email,
            },
          })
        );
        window.location.reload();
      }
    } catch (error) {
      setApiError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    // Implement Google login logic here
    // Use Google API to get the token ID
    const tokenId = 'your_token_id'; // Replace with the token ID from Google API
    try {
      const result = await googleLogin(tokenId);
      if (result.status === "success") {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: result.token,
            data: {
              name: result.data.user.name,
              email: result.data.user.email,
            },
          })
        );
        window.location.reload();
      }
    } catch (error) {
      setApiError(error.message);
    }
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
                  {loginFunctionBTN(facebook, "الفبسبوك", handleFacebookLogin)}
                  {loginFunctionBTN(google, " جوجل", handleGoogleLogin)}
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
