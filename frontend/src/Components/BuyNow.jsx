import cartbtnStyles from "../styles/cartbtn.module.css";
import { useNavigate } from "react-router-dom";

export default function BuyNow() {
  const navigate = useNavigate();
  const loginToken = localStorage.getItem("loginToken");
  const registerToken = localStorage.getItem("registerToken");

  const thanksNavigate = () => {
    if (!loginToken || !registerToken) {
      navigate("/login");
    } else {
      navigate("/thanks");
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
