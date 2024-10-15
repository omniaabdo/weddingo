import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <ul className="footer__links">
            <li>
              <Link to={"/login"}>سجل الان </Link>
            </li>
            <li>
              <Link to={"/register"}>انضم الينا الان </Link>
            </li>
            <li>
              <Link to={"/"}>الصفحة الرئيسية </Link>
            </li>
            <li>
              <Link to={"/about"}>من نحن </Link>
            </li>
            <li>
              <Link to={"/contact"}>تواصل معنا </Link>
            </li>
            <li>
              <Link to={"/services"}>الخدمات </Link>
            </li>

            <li>
              <a
                rel="nofollow"
                href="https://www.weddingwire.com/corp/legal/terms-of-use"
              >
                الشروط والاحكام
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.weddingwire.com/corp/legal/privacy-policy"
              >
                القوانين والشروط
              </a>
            </li>
            <li>
              <span
                class="app-link-blank pointer color-grey"
                data-href="https://www.weddingwire.com/privacy/noSaleForm"
              >
                لا تقوم ببيع معلوماتي
              </span>
            </li>
          </ul>
          <p className="copy-right">
            © 2023 - 2024 حقوق النشر والطباعة محفوظة .
          </p>
        </div>
      </footer>
    </>
  );
}
