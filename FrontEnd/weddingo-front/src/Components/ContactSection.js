import email_icon from "../assets/img/smail-logos/email.svg";
import phone_icon from "../assets/img/smail-logos/phone.svg";
import location_icon from "../assets/img/smail-logos/location.svg";
export default function ContactSection() {
  return (
    <>
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 contact-us_content">
              <h1>تواصل معنا</h1>
              <p>
                تصميم هذه الصفحة بسيط ولكنه يتماشى مع رؤية Domo التي لا تريد أن
                تظهر بشكل معقد. تصميم موقعهم الإلكتروني ككل بسيط ونظيف، لذا فإن
                هذا النهج البسيط في تصميم الصفحة يعزز علامتهم التجارية بشكل جيد.
              </p>
              <ul className="contact-us_content-list">
                <li>
                  <div className="list-icon">
                    <img src={email_icon} alt="أيقونة البريد الإلكتروني" />
                  </div>
                  <p> example@domen.com</p>
                </li>
                <li>
                  <div className="list-icon">
                    <img src={phone_icon} alt="أيقونة الهاتف" />
                  </div>
                  <p> 01XXXXXXXXX</p>
                </li>
                <li>
                  <div className="list-icon">
                    <img src={location_icon} alt="أيقونة الموقع" />
                  </div>
                  <p> مصر، القاهرة - أسيوط</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12 contact-us_form">
              <form>
                <div class="mb-4">
                  <label class="form-label">الاسم الكامل</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="الاسم الكامل (مثل.. جون دو)"
                  />
                </div>
                <div class="mb-4">
                  <label class="form-label">عنوان البريد الإلكتروني</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-4">
                  <label class="form-label">الرسالة</label>
                  <textarea class="form-control" rows="5"></textarea>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary">إرسال الان</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
