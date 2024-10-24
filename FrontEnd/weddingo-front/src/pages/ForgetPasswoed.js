import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ForgetPassword() {
  const [send, setSend] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5002/api/users/forgotPassword", { email });
      setMessage("تم ارسال رمز التحقق الى بريدك الالكترونى");
      setSend(true); // Move to the next step
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5002/api/users/verifyCode", {
        email,
        verificationCode,
      });
      
      localStorage.setItem("resetEmail", email);
      setMessage(response.data.message); // Set success message from response
      // Navigate to the reset password page upon successful verification
      navigate("/reset-password", {
        state: {
          email,
          verificationCode
          // Pass the email
        },
      });
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Verification failed. Please try again.");
    }
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
                  <p>سوف يتم ارسال رمز تحقق علي البريد الالكتروني</p>
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
                    {message && <p>{message}</p>} {/* Display feedback messages */}
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
