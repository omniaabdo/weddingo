import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link to={'/'}>
            <img src={Logo} alt="Logo" />
          </Link>
        </nav>
      </header>
    </>
  );
}
