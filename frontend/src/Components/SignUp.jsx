import signupStyles from "../styles/signup.module.css";
import Footer from "./Footer";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../api/signup";
import { useState } from "react";
import continueBtnStyles from "../styles/continueBtn.module.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    mobileNo: "",
    email_id: "",
    password: "",
  });

  const[error,setError] = useState(false)

  const handleRegister = async () => {
    try {
      if (
        !registerData.name ||
        !registerData.mobileNo ||
        !registerData.email_id ||
        !registerData.password
      ) {
        console.log("all fields required");
        setError(true)
      }
      const payload = await signUpApi(registerData);
      console.log(payload);
      setRegisterData({
        name: "",
        mobileNo: "",
        email_id: "",
        password: "",
      });
      setError(false)
      if(!error){
        navigate("/");
      }
      setError
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Logo />
      <div className={signupStyles.signupContainer}>
        <h1 className={signupStyles.header}>Create Account</h1>
        <p className={signupStyles.text}>Your Name</p>
        <input
          type="text"
          className={signupStyles.inputs}
          name="name"
          value={registerData.name}
          onChange={(e) =>
            setRegisterData({ ...registerData, name: e.target.value })
          }
        />
        <p className={signupStyles.text}>Mobile Number</p>
        <input
          type="number"
          className={signupStyles.inputs}
          name="mobileNo"
          value={registerData.mobileNo}
          onChange={(e) =>
            setRegisterData({ ...registerData, mobileNo: e.target.value })
          }
        />
        <p className={signupStyles.text}>Email ID</p>
        <input
          type="email"
          className={signupStyles.inputs}
          name="email_id"
          value={registerData.email_id}
          onChange={(e) =>
            setRegisterData({ ...registerData, email_id: e.target.value })
          }
        />
        <p className={signupStyles.text}>Password</p>
        <input
          type="password"
          className={signupStyles.inputs}
          name="password"
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
        />
        <p className={signupStyles.termsText}>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Musicart.
          Message and data rates may apply.
        </p>
        <button
          className={continueBtnStyles.continueBtn}
          onClick={handleRegister}
        >
          Continue
        </button>
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
