import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "../assets/css/edit-profile.css";

export default function EditProfileSection() {
  const [profile_img, setProfileImage] = useState("profile-picture.jpg");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("example@domain.com"); // Read-only
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const [successMessage, setSuccessMessage] = useState(""); // For success messages

  // Fetch the user's current data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/v1/users/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in local storage
          },
        });

        const { name, email } = response.data.data.user;
        const [first, last] = name.split(" ");
        setFirstName(first);
        setLastName(last);
        setEmail(email);
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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (newPassword && newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Prepare data for submission
    const updatedUserData = {
      name: `${firstName} ${lastName}`,
      email,
      currentPassword,
      password: newPassword || undefined, // Only send new password if provided
    };

    try {
      const response = await axios.patch('/api/v1/users/me', updatedUserData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in local storage
        },
      });

      setSuccessMessage("تم تعديل البروفايل بنجاح");
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred!");
      setSuccessMessage(""); // Clear any previous success messages
    }
  };

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
                    <img src={profile_img} alt="Profile" />
                  </div>
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
                    style={{ display: 'none' }} // Hide the file input
                  />
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                  {/* First Name */}
                  <div className="form-group my-3 py-3">
                    <label htmlFor="first-name">الاسم الأول</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first-name"
                      placeholder="أدخل الاسم الأول"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div className="form-group my-3 py-3">
                    <label htmlFor="last-name">الاسم الأخير</label>
                    <input
                      type="text"
                      className="form-control"
                      id="last-name"
                      placeholder="أدخل الاسم الأخير"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
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

                  {/* Current Password */}
                  <div className="form-group my-3 py-3">
                    <label htmlFor="current-password">كلمة المرور الحالية</label>
                    <input
                      type="password"
                      className="form-control"
                      id="current-password"
                      placeholder="أدخل كلمة المرور الحالية"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
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
                    <label htmlFor="confirm-password">تأكيد كلمة المرور الجديدة</label>
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
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}

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
    </>
  );
}
