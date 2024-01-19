import cartbtnStyles from "../styles/cartbtn.module.css";
import { useNavigate } from "react-router-dom";

export default function BuyNow() {
  const navigate = useNavigate();
  const loginToken = localStorage.getItem("loginToken");
  const registerToken = localStorage.getItem("registerToken");

  let token;
  if (loginToken) {
    token = loginToken;
  } else {
    token = registerToken;
  }

  const thanksNavigate = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };
  return (
    <div>
      <button className={cartbtnStyles.buybtn} onClick={thanksNavigate}>
        Buy Now
      </button>
    </div>
  );
}
