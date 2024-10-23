import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import CustomModulesForAll from "./CustomModulesForAll";
import { BASE_URL } from "../utils/config";
export default function NewsListSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // لإدارة حالة التحميل
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    // التحقق من صحة البريد الإلكتروني
    if (!email) {
      handleShow({
        type: "danger",
        message: "يرجى إدخال البريد الإلكتروني",
      });
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      handleShow({
        type: "danger",
        message: "يرجى إدخال بريد إلكتروني صحيح",
      });
    } else {
      setLoading(true); // تعيين حالة التحميل

      try {
        // إرسال البيانات إلى API
        const response = await fetch(`${BASE_URL}/api/home/subscription`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });

        const data = await response.json();
        console.log(data);

        if (data.status === "success") {
          handleShow({
            type: "success",
            message: "تم الاشتراك بنجاح",
          });
          setEmail(""); // إعادة تعيين الحقل
        } else {
          if (/E11000 duplicate key error/.test(data?.message)) {
            handleShow({
              type: "danger",
              message: "البريد الالكتروني موجود بالفعل",
            });
          } else {
            handleShow({
              type: "danger",
              message: "حدث خطأ أثناء الاشتراك",
            });
          }
        }
      } catch (error) {
        handleShow({
          type: "danger",
          message: "فشل الاتصال بالخادم. حاول مرة أخرى.",
        });
      } finally {
        setLoading(false); // إيقاف حالة التحميل
      }
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
      <section className="min-section subscription">
        <div className="container">
          <div className="subscription_content">
            <div className="row ">
              <div className="col-lg-6 col-sm-12 m-auto">
                <h1 className="frist">اشترك </h1>
                <h1>الان </h1>
                <h1>الي</h1>
                <h1>عملائنا </h1>
                <h1 className="last">المميزون </h1>
                <div className="subscription_content-form">
                  <Form onSubmit={handleSubmit}>
                    <InputGroup className="mt-3">
                      <Form.Control
                        type="email"
                        placeholder="ادخل بريدك الالكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading} // تعطيل الإدخال أثناء التحميل
                      />
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "جاري الاشتراك..." : "اشترك الآن"}
                      </Button>
                    </InputGroup>
                  </Form>
                </div>
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
