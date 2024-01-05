import HomeLogo from "../Components/HomeLogo";
import thankStyles from "../styles/thanks.module.css";
import confetti from "../assets/images/confetti.png";
import { useNavigate } from "react-router-dom";
import MobileFooter from "../Components/MobileFooter";

export default function Thanks() {
  const navigate = useNavigate();
  return (
    <div>
      <HomeLogo />
      <div className={thankStyles.container}>
        <img src={confetti} className={thankStyles.image}></img>
        <h1 className={thankStyles.head}>Order is placed successfully!</h1>
        <p className={thankStyles.text}>
          You will be receiving a confirmation email with order details
        </p>
        <button className={thankStyles.btn} onClick={() => navigate("/")}>
          Go back to Home page
        </button>
      </div>
      <MobileFooter />
    </div>
  );
}
