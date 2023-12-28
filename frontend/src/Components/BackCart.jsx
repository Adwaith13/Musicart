import backStyles from "../styles/back.module.css";
import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();
  return (
    <div>
      <button className={backStyles.btn} onClick={() => navigate("/cart")}>
        Back to Cart
      </button>
    </div>
  );
}
