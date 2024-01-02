import cartbtnStyles from "../styles/cartbtn.module.css";
import { useNavigate } from "react-router-dom";

export default function BuyNow() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={cartbtnStyles.buybtn}
        onClick={() => navigate("/thanks")}
      >
        Buy Now
      </button>
    </div>
  );
}
