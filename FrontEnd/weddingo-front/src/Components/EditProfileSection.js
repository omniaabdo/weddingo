import { useState } from "react";
import "../assets/css/edit-profile.css";
import profile_img from '../assets/img/single-services/photographers/1.jpg'
export default function EditProfileSection() {
  const [profileImage, setProfileImage] = useState("profile-picture.jpg");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("example@domain.com"); // Read-only
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary actions (e.g., form submission)
    console.log({
      firstName,
      lastName,
      email,
      currentPassword,
      newPassword,
      confirmPassword,
    });
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
                    <label htmlFor="current-password">
                      كلمة المرور الحالية
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="current-password"
                      placeholder="أدخل كلمة المرور الحالية"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
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
