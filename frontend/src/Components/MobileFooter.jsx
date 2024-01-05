import HomeIcon from "../assets/logos/home_icon.svg";
import CartIcon from "../assets/logos/cart_icon.svg";
import LoginIcon from "../assets/logos/login_icon.svg";
import mobilefooterstyles from "../styles/mobilefooter.module.css";
import { useNavigate } from "react-router-dom";

export default function MobileFooter() {
  const loginToken = localStorage.getItem("loginToken");
  const registerToken = localStorage.getItem("registerToken");
  let token;

  if (loginToken) {
    token = loginToken;
  } else if (registerToken) {
    token = registerToken;
  }

  const navigate = useNavigate();
  const hanldeCart = () => {
    if (!token) {
      navigate("/login");
    }
    navigate("/cart");
  };
  return (
    <div className={mobilefooterstyles.container}>
      <img
        src={HomeIcon}
        className={mobilefooterstyles.home}
        onClick={() => navigate("/")}
      ></img>
      <img
        src={CartIcon}
        className={mobilefooterstyles.cart}
        onClick={hanldeCart}
      ></img>
      <img
        src={LoginIcon}
        className={mobilefooterstyles.login}
        onClick={() => navigate("/login")}
      ></img>
    </div>
  );
}
