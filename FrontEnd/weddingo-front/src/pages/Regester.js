import { Link, useNavigate } from "react-router-dom";
import apple from "../assets/img/smail-logos/apple.svg";
import facebook from "../assets/img/smail-logos/facebook.svg";
import google from "../assets/img/smail-logos/google.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regesterUserApi } from "../services/store/auth/rejester";
const loginFunctionBTN = (img, text) => {
  return (
    <>
      <div className="lgf-single-card card">
        <img src={img} alt="apple Logo" />
        <b> سجل دخول باستخدام{text}</b>
      </div>
    </>
  );
};

export default function Register() {
  const { loading } = useSelector((state) => state.regesterReducer);
  const [apiError, setApiError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*#region Form Controle */

  // Define states for form values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(""); // user type
  const [errors, setErrors] = useState({}); // State for validation errors

  // Email regex for basic email format validation
  const emailRegex = /\S+@\S+\.\S+/;

  // Function to validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Full name validation
    if (!fullName.trim()) {
      newErrors.fullName = "الاسم بالكامل مطلوب";
    }

    // Email validation
    if (!email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    // Password validation
    if (!password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون أكثر من 6 أحرف";
    }

    // User type validation
    if (!userType) {
      newErrors.userType = "يجب اختيار نوع المستخدم";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before submitting
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // If errors exist, set them in state
      return;
    }

    // Form data is valid, proceed with submission
    const formData = {
      fullName,
      email,
      password,
      userType,
    };
    dispatch(regesterUserApi(formData)).then((result) => {
      if (result.payload.status === "success") {
        localStorage.setItem(
          "userDate",
          JSON.stringify({
            token: result.payload.token,
            data: {
              name: result.payload.data.user.name,
              email: result.payload.data.user.email,
            },
          })
        );
        // Navigate to the home page
        navigate("/");
      } else {
        if (/E11000 duplicate key error/.test(result.payload.message)) {
          setApiError("البريد موجود بالفعل");
        }
      }
    });

    // Reset form (optional)
    // setFullName("");
    // setEmail("");
    // setPassword("");
    // setUserType("");
    setErrors({});
  };
  /*#endregion */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="register-form">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-10 col-sm-12  m-auto">
              <div className="register-form__form card">
                <div className="img-content"></div>
                <div className="text-content">
                  <div className="login-functions">
                    {loginFunctionBTN(facebook, "فيسبوك")}
                    {loginFunctionBTN(google, "جوجل")}
                    <form>
                      <div class="mb-2 form-control-sm">
                        <select class="form-control" id="selelct-input-form">
                          <option selected>نوع المستخدم </option>
                          <option>عميل (عريس/عروس)</option>
                          <option>بائع (مقدم خدمة)</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <h6 className="mt-3 py-1"> او سجل بالبريد الالكتروني </h6>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-2 form-control-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ادخل الاسم بالكامل"
                        value={fullName}
                        onChange={(e) => {
                          setApiError("");
                          setFullName(e.target.value);
                        }}
                        required
                        disabled={loading && true}
                      />
                      {errors.fullName && (
                        <p className="text-danger">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="mb-2 form-control-sm">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="ادخل البريد الاكتروني ..."
                        value={email}
                        onChange={(e) => {
                          setApiError("");
                          setEmail(e.target.value);
                        }}
                        required
                        disabled={loading && true}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>

                    <div className="mb-2 form-control-sm">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="ادخل كلمة المرور ..."
                        value={password}
                        onChange={(e) => {
                          setApiError("");
                          setPassword(e.target.value);
                        }}
                        required
                        disabled={loading && true}
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </div>

                    <div className="mb-2 form-control-sm">
                      <select
                        className="form-control"
                        value={userType}
                        onChange={(e) => {
                          setApiError("");
                          setUserType(e.target.value);
                        }}
                        required
                        disabled={loading && true}
                      >
                        <option value="" disabled selected>
                          نوع المستخدم
                        </option>
                        <option value="user">عميل (عريس/عروس)</option>
                        <option value="vendor">بائع (مقدم خدمة)</option>
                      </select>
                      {errors.userType && (
                        <p className="text-danger">{errors.userType}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-danger py-2">{apiError && apiError}</p>
                    </div>
                    <div className="form-button pt-4">
                      <button className="btn btn-primary" type="submit">
                        سجل الان
                      </button>
                    </div>

                    <div className="login-goto">
                      <p>
                        لدي حساب بالفعل ؟
                        <Link to={"/login"}> تسجيل الدخول</Link>
                      </p>
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
