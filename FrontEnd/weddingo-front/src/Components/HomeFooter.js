import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
export default function HomeFooter() {
  return (
    <>
      <footer className="home-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 home-footer_content">
              <h6 className="home-footer_content-title">الصفحات الرئيسية</h6>
              <ul className="home-footer_content-list">
                <li>
                  <Link to={"/"}>الرئيسية</Link>
                </li>
                <li>
                  <Link to={"/about"}>من نحن</Link>
                </li>
                <li>
                  <Link to={"/contact"}>تواصل معنا</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 home-footer_content">
              <h6 className="home-footer_content-title">خدماتنا </h6>
              <ul className="home-footer_content-list">
                <li>
                  <Link to={"/"}>استكشاف قاعات الزفاف</Link>
                </li>
                <li>
                  <Link to={"/"}>مصورين حفلات الزفاف</Link>
                </li>
                <li>
                  <Link to={"/"}>مراكز التجميل</Link>
                </li>
                <li>
                  <Link to={"/"}>اماكن التصوير المشهورة</Link>
                </li>
                <li>
                  <Link to={"/"}>متجر الادوات</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 home-footer_content">
              <h6 className="home-footer_content-title">المزيد</h6>
              <ul className="home-footer_content-list">
                <li>
                  <Link to={"/"}>صفحتي الشخصية</Link>
                </li>
                <li>
                  <Link to={"/"}>الميزانية</Link>
                </li>
                <li>
                  <Link to={"/"}>مدير الخدمات</Link>
                </li>
                <li>
                  <Link to={"/"}>البائعون</Link>
                </li>
              </ul>

              <h6 className="home-footer_content-title">سجل دخول الان </h6>
              <ul className="home-footer_content-list">
                <li>للاستمتاع بهذة الخدمات عليك بالاشتراك لدينا وتمتع بتلك الخدمات مجانا ... نحن في انتظارك الان</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 home-footer_content">
              <h6 className="home-footer_content-title">من نحن  </h6>
              <ul className="home-footer_content-list">
                <li>
                  <img src={logo} alt="" />
                  <p>
                   نقدم لك افضل الحلول والاسعار والامكانيات لجعل حفل زفافك هو الامثل والافضل .
                  </p>
                </li>
              </ul>
              <h6 className="home-footer_content-title">تابعنا الان علي</h6>
              <ul className="home-footer_content-list socialLinks__list">
                <li>
                  <a
                    className="socialLinks__item"
                    rel="nofollow noopener noreferrer"
                    href="https://www.facebook.com/weddingwire"
                    title="Facebook"
                    target="_blank"
                  >
                    <i
                      className="svgIcon app-svg-async svgIcon__facebook "
                      data-svg="https://cdn1.weddingwire.com/assets/svg/optimized/_common/facebook.svg"
                      data-svg-lazyload="1"
                      data-loaded="true"
                    >
                      <svg viewBox="0 0 1792 1792">
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"></path>
                      </svg>
                    </i>{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="socialLinks__item"
                    rel="nofollow noopener noreferrer"
                    href="https://twitter.com/weddingwire"
                    title="Twitter"
                    target="_blank"
                  >
                    <i
                      className="svgIcon app-svg-async svgIcon__twitter "
                      data-svg="https://cdn1.weddingwire.com/assets/svg/optimized/_common/twitter.svg"
                      data-svg-lazyload="1"
                      data-loaded="true"
                    >
                      <svg viewBox="0 0 20 20">
                        <path d="M2.039 2l6.177 8.825L2 18h1.4l5.442-6.282L13.239 18H18l-6.525-9.321L17.261 2h-1.399L10.85 7.785 6.8 2H2.04zm2.057 1.101h2.188L15.942 16.9h-2.187L4.096 3.1z"></path>
                      </svg>
                    </i>{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="socialLinks__item"
                    rel="nofollow noopener noreferrer"
                    href="https://www.pinterest.com/weddingwire/"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i
                      className="svgIcon app-svg-async svgIcon__pinterest "
                      data-svg="https://cdn1.weddingwire.com/assets/svg/optimized/_common/pinterest.svg"
                      data-svg-lazyload="1"
                      data-loaded="true"
                    >
                      <svg viewBox="0 0 1792 1792">
                        <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"></path>
                      </svg>
                    </i>{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="socialLinks__item"
                    rel="nofollow noopener noreferrer"
                    href="https://www.instagram.com/weddingwire/"
                    title="Instagram"
                    target="_blank"
                  >
                    <i
                      className="svgIcon app-svg-async svgIcon__instagram "
                      data-svg="https://cdn1.weddingwire.com/assets/svg/optimized/_common/instagram.svg"
                      data-svg-lazyload="1"
                      data-loaded="true"
                    >
                      <svg viewBox="0 0 1792 1792">
                        <path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"></path>
                      </svg>
                    </i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-footer-devider">
            <p>© 2023 - 2024 حقوق النشر والطباعة محفوظة .</p>
          </div>
        </div>
      </footer>
    </>
  );
}
