import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ForgetPassword() {
  const [send, setSend] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5002/api/users/forgotPassword", { email });
      setMessage("Verification code sent to your email!");
      setSend(true);
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    // Logic for verifying the code would go here
    // For now, let's redirect to the reset password page
    // Ideally, you should check if the verification code is valid before redirecting
    Link("/resetPassword");
  };

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
                  <form onSubmit={send ? handleVerifyCode : handleSendEmail}>
                    {send ? (
                      <>
                        <div className="mb-2 form-control-sm">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ادخل رمز التحقق"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-button">
                          <button type="submit" className="btn btn-success">التحقق</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mb-2 form-control-sm">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="ادخل البريد الالكتروني ..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-button">
                          <button type="submit" className="btn btn-primary">ارسال</button>
                        </div>
                      </>
                    )}
                    {message && <p>{message}</p>} {/* Display messages */}
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
