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
        <b> سجل دخول باستخدام{text}</b>
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

                  <form>
                    <div class=" mb-2 form-control-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ادخل الاسم بالكامل"
                      />
                    </div>
                    <div class=" mb-2 form-control-sm">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="ادخل البريد الاكتروني ..."
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
                    <div class="mb-2 form-control-sm">
                      <select class="form-control" id="selelct-input-form">
                        <option selected>نوع المستخدم </option>
                        <option>عميل (عريس/عروس)</option>
                        <option>بائع (مقدم خدمة)</option>
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
                      <button className="btn btn-primary">سجل الان</button>
                    </div>
                    <div className="login-goto">
                      <p className="">
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
