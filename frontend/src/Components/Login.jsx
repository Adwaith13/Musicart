import signupStyles from "../styles/signup.module.css";
import ContinueBtn from "./ContinueBtn";
import line from "../assets/images/line.png";
import Footer from "./Footer";
import Logo from "./Logo";

export default function Login() {
  return (
    <>
      <Logo />
      <div className={signupStyles.loginContainer}>
        <h1 className={signupStyles.header}>Sign In</h1>
        <p className={signupStyles.text}>Enter Your Email ID</p>
        <input type="email" className={signupStyles.inputs} />
        <p className={signupStyles.text}>Password</p>
        <input type="password" className={signupStyles.inputs} />
        <ContinueBtn className={signupStyles.continueBtn} />
        <p className={signupStyles.agree}>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>

      <div className={signupStyles.section}>
        <img src={line} width={150} className={signupStyles.line1}></img>
        <span className={signupStyles.sectionText}>New to Musicart</span>
        <img src={line} width={150} className={signupStyles.line2}></img>
      </div>
      <button className={signupStyles.createBtn}>
        Create your Musicart account
      </button>
      <Footer />
    </>
  );
}
