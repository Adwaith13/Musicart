import phone from "../assets/logos/phone.svg";
import navbarStyles from "../styles/navbar.module.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={navbarStyles.navbar}>
      <img src={phone} className={navbarStyles.img}></img>
      <p className={navbarStyles.number}>912121131313</p>
      <p className={navbarStyles.discount}>
        Get 50% off on selected items | Shop Now
      </p>
      <p className={navbarStyles.login} onClick={() => navigate("/login")}>
        Login |
      </p>
      <p className={navbarStyles.signup} onClick={() => navigate("/signup")}>
        SignUp
      </p>
    </div>
  );
}
