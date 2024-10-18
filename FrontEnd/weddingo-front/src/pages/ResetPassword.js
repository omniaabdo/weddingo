import { Link, useNavigate } from "react-router-dom";
import apple from "../assets/img/smail-logos/apple.svg";
import facebook from "../assets/img/smail-logos/facebook.svg";
import google from "../assets/img/smail-logos/google.svg";
import { useEffect, useState } from "react";
export default function ResetPassword() {
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
                <h4>  تعيين كلمة المرور  </h4>

                  <p>اعادة تعيين كلمة المرور </p>
                  <form className="">
                    <div className=" mb-2 form-control-sm">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="ادخل كلمة المرور الجديدة"
                      />
                    </div>
                    <div className=" mb-2 form-control-sm">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="ناكيد كلمة المرور الجديدة"
                      />
                    </div>
                    <div className="form-button">
                      <Link className="btn btn-primary">
                        اعادة تعيين كلمة المرور
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
