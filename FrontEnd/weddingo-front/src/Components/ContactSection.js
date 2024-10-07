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
              <h1>GET IN TOUCH WITH US</h1>
              <p>
                The design of this page is nothing crazy, but it seems that Domo
                doesn't want to appear crazy, after all. Their overall website
                design is just as clean, so the simplistic approach to this page
                complements their brand well.
              </p>
              <ul className="contact-us_content-list">
                <li>
                  <div className="list-icon">
                    <img src={email_icon} alt="" />
                  </div>
                  <p> example@domen.com</p>
                </li>
                <li>
                  <div className="list-icon">
                    <img src={phone_icon} alt="" />
                  </div>
                  <p> 01XXXXXXXXX</p>
                </li>
                <li>
                  <div className="list-icon">
                    <img src={location_icon} alt="" />
                  </div>
                  <p> Egypt, Cairo - Assuit</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12 contact-us_form">
              <form>
                <div class="mb-4">
                  <label class="form-label">Full Name</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Full Name (ex..jon doe)"
                  />
                </div>
                <div class="mb-4">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-4">
                  <label class="form-label">Messages</label>
                  <textarea class="form-control" rows="5"></textarea>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
