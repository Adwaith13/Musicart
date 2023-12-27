import signupStyles from "../styles/signup.module.css";
import ContinueBtn from "./ContinueBtn";
import Footer from "./Footer";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <Logo />
      <div className={signupStyles.signupContainer}>
        <h1 className={signupStyles.header}>Create Account</h1>
        <p className={signupStyles.text}>Your Name</p>
        <input type="text" className={signupStyles.inputs} />
        <p className={signupStyles.text}>Mobile Number</p>
        <input type="number" className={signupStyles.inputs} />
        <p className={signupStyles.text}>Email ID</p>
        <input type="email" className={signupStyles.inputs} />
        <p className={signupStyles.text}>Password</p>
        <input type="password" className={signupStyles.inputs} />
        <p className={signupStyles.termsText}>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Musicart.
          Message and data rates may apply.
        </p>
        <ContinueBtn className={signupStyles.continueBtn} />
        <p className={signupStyles.agree}>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>
      <div className={signupStyles.account}>
        <p className={signupStyles.already}>Already have an Account?</p>
        <p className={signupStyles.signIn} onClick={() => navigate("/login")}>
          Sign In
        </p>
      </div>
      <Footer />
    </>
  );
}
