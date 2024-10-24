import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/config";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation(); // Use useLocation to access the passed state
  const navigate = useNavigate();

  const { email, verificationCode } = location.state || {}; // Destructure email and verificationCode

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("كلمات المرور غير متطابقة");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/users/resetPassword`, {
        email,
        verificationCode, // Use the verificationCode received from the previous component
        newPassword,
      });

      setMessage(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "حدث خطأ ما. من فضلك حاول مرة أخرى"
      );
    }
  };

  return (
    <>
      <section className="login-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="login-form__form card">
                <div className="img-content"></div>
                <div className="text-content">
                  <h4>تعيين كلمة المرور</h4>
                  <p>اعادة تعيين كلمة المرور</p>
                  <form onSubmit={handleResetPassword}>
                    <div className="mb-2 form-control-sm">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="ادخل كلمة المرور الجديدة"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2 form-control-sm">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="أكد كلمة المرور الجديدة"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-button">
                      <button type="submit" className="btn btn-primary">
                        اعادة تعيين كلمة المرور
                      </button>
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
