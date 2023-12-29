import signupStyles from "../styles/signup.module.css";
import line from "../assets/images/line.png";
import Footer from "./Footer";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/login";
import { useState } from "react";
import continueBtnStyles from "../styles/continueBtn.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email_id: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    try {
      if (!loginData.email_id || !loginData.password) {
        setError(true);
      }
      const data = await loginApi(loginData);
      console.log(data);
      setLoginData({
        email_id: "",
        password: "",
      });
      setError(false);
      if (!error) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Logo />
      <div className={signupStyles.loginContainer}>
        <h1 className={signupStyles.header}>Sign In</h1>
        <p className={signupStyles.text}>Enter Your Email ID</p>
        <input
          type="email"
          className={signupStyles.inputs}
          name="email_id"
          value={loginData.email_id}
          onChange={(e) =>
            setLoginData({ ...loginData, email_id: e.target.value })
          }
        />
        <p className={signupStyles.text}>Password</p>
        <input
          type="password"
          className={signupStyles.inputs}
          name="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button className={continueBtnStyles.continueBtn} onClick={handleLogin}>
          Continue
        </button>
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
      <button
        className={signupStyles.createBtn}
        onClick={() => navigate("/signup")}
      >
        Create your Musicart account
      </button>
      <Footer />
    </>
  );
}
