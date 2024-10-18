import { Link, useNavigate } from "react-router-dom";
import apple from "../assets/img/smail-logos/apple.svg";
import facebook from "../assets/img/smail-logos/facebook.svg";
import google from "../assets/img/smail-logos/google.svg";
import { useEffect, useState } from "react";
export default function ForgetPasswoed() {
  const [send, setSend] = useState(false);

  return (
    <>
      <section className="login-form">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-10 col-sm-12  m-auto">
              <div className="login-form__form card">
                <div className="img-content"></div>
                <div className="text-content">
                  <h4> نسيت كلمة السر </h4>
                  <p>سوف يتم ارسال رقم تحقق علي البريد الالكتروني</p>
                  <form className="">
                    {send ? (
                      <>
                        <div className=" mb-2 form-control-sm">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="ادخل رمز التحقق"
                          />
                        </div>
                        <div className="form-button">
                          <Link to={'/reset-password'} className="btn btn-success">التحقق</Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <div class=" mb-2 form-control-sm">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="ادخل البريد الالكتروني ..."
                          />
                        </div>
                        <div
                          className="form-button"
                          onClick={() => setSend(true)}
                        >
                          <Link className="btn btn-primary">ارسال</Link>
                        </div>
                      </>
                    )}
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
