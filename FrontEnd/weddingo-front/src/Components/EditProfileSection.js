import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "../assets/css/edit-profile.css";
import { BASE_URL } from "../utils/config";
import persone from "../assets/img/avatar/avatar2.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomModulesForAll from "./CustomModulesForAll";

export default function EditProfileSection() {
  const navegate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null); // حالة لتخزين الصورة الجديدة المختارة
  const [isImageSelected, setIsImageSelected] = useState(false); // حالة للتحكم في إظهار زر "رفع الآن"

  const [profile_img, setProfileImage] = useState();

  const [fullName, setFulltName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [email, setEmail] = useState(""); // Read-only
  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const [successMessage, setSuccessMessage] = useState(""); // For success messages

  // Fetch the user's current data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      const token = JSON.parse(localStorage.getItem("userData")).token;
      try {
        const response = await axios.get(`${BASE_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`, // Assuming you store the token in local storage
          },
        });

        const { name, email, image } = response.data.data.user;
        setFulltName(name);
        setEmail(email);
        setUserImage(image);
      } catch (error) {
        setErrorMessage("Error fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setSelectedImage(file);
      setIsImageSelected(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (newPassword && newPassword !== confirmPassword) {
      setErrorMessage("كلمة المرور غير مطابقة");
      return;
    }

    // Prepare data for submission
    const updatedUserData = {
      name: fullName,
      password: newPassword || undefined, // Only send new password if provided
    };
    const token = JSON.parse(localStorage.getItem("userData")).token;

    try {
      const response = await axios.post(
        `${BASE_URL}/api/users/edit`,
        updatedUserData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Assuming you store the token in local storage
          },
        }
      );
      console.log(response.data);

      if (response.data.status === "success") {
        navegate("/profile");
        setErrorMessage(""); // Clear any previous error messages
      } else {
        handleShow({
          type: "danger",
          message: "حدث خطاء , يرجي المحاولة لاحقا",
        });
      }
    } catch (error) {
      setErrorMessage("");
      handleShow({
        type: "danger",
        message:
          error.response?.data?.message || "خطاء في السيرفر , حاول لاحقا",
      });
      setSuccessMessage(""); // Clear any previous success messages
      console.log(error);
    }
  };

  //update image
  const handleUploadImage = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("file", selectedImage);
    const token = JSON.parse(localStorage.getItem("userData")).token;

    try {
      const response = await fetch(`${BASE_URL}/api/users/edit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Assuming you store the token in local storage
        },
        body: formData,
      });

      if (response.ok) {
        setIsImageSelected(false);
        navegate("/profile");
      } else {
        handleShow({
          type: "danger",
          message: "حدث خطاء , يرجي المحاولة لاحقا",
        });
      }
    } catch (error) {
      handleShow({
        type: "danger",
        message: "خطاء في السيرفر , حاول لاحقا ",
      });
    }
  };
  /* ##region Module Massage */
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    type: "",
    message: "",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = (data) => {
    setModalData(data); // تعيين الرسالة
    setShowModal(true); // فتح الـModal
  };
  /* ##endregion*/
  return (
    <>
      <section className="profile-edit">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="profile-edit_profile-container card">
                <h3 className="text-center mb-4">تعديل البروفايل الشخصي</h3>

                {/* Profile Picture Section */}
                <div className="text-center mb-4">
                  <div className="profile-pic">
                    {profile_img ? (
                      <img src={profile_img} alt="Profile" />
                    ) : (
                      <>
                        {userImage !== "" ? (
                          <img
                            src={`${BASE_URL}/image/${userImage}`}
                            alt="Profile"
                          />
                        ) : (
                          <img src={persone} alt="Profile" />
                        )}
                      </>
                    )}
                  </div>

                  {!isImageSelected ? (
                    <>
                      <label
                        htmlFor="profile-pic-input"
                        className="btn btn-primary mt-2"
                      >
                        تعديل الصورة
                      </label>
                      <input
                        type="file"
                        id="profile-pic-input"
                        onChange={handleImageChange}
                        style={{ display: "none" }} // إخفاء عنصر الإدخال
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        className="btn btn-success mt-2"
                        onClick={handleUploadImage}
                      >
                        رفع الآن
                      </Button>
                    </>
                  )}
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                  {/* First Name */}
                  <div className="form-group my-3 py-3">
                    <label htmlFor="first-name">الاسم بالكامل</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first-name"
                      placeholder="أدخل الاسم بالكامل"
                      value={fullName}
                      onChange={(e) => setFulltName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email (Read-only) */}
                  <div className="form-group my-3 py-3">
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="form-control read-only-input"
                      id="email"
                      value={email}
                      readOnly
                    />
                  </div>

                  {/* New Password */}
                  <div className="form-group my-3 py-3">
                    <label htmlFor="new-password">كلمة المرور الجديدة</label>
                    <input
                      type="password"
                      className="form-control"
                      id="new-password"
                      placeholder="أدخل كلمة المرور الجديدة"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  {/* Confirm New Password */}
                  <div className="form-group my-3 py-3">
                    <label htmlFor="confirm-password">
                      تأكيد كلمة المرور الجديدة
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm-password"
                      placeholder="أعد إدخال كلمة المرور الجديدة"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  {/* Error and Success Messages */}
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}

                  {/* Submit Button */}
                  <div className="text-center">
                    <button type="submit" className="btn btn-submit">
                      حفظ التعديلات
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomModulesForAll
        show={showModal}
        handleClose={handleClose}
        message={modalData.message}
        type={modalData.type}
      />
    </>
  );
}
