import phone from "../assets/logos/phone.svg";
import navbarStyles from "../styles/navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic if needed
    // For example, remove tokens from localStorage
    localStorage.removeItem("loginToken");
    localStorage.removeItem("registerToken");

    // Redirect to home or login page
    navigate("/");
  };

  const isLoggedIn = () => {
    return localStorage.getItem("loginToken") || localStorage.getItem("registerToken");
  };

  return (
    <div className={navbarStyles.navbar}>
      <img src={phone} className={navbarStyles.img} alt="Phone Logo" />
      <p className={navbarStyles.number}>912121131313</p>
      <p className={navbarStyles.discount}>
        Get 50% off on selected items | Shop Now
      </p>
      {isLoggedIn() ? (
        <p className={navbarStyles.login} onClick={handleLogout}>
          Logout
        </p>
      ) : (
        <>
          <p className={navbarStyles.login} onClick={() => navigate("/login")}>
            Login |
          </p>
          <p className={navbarStyles.signup} onClick={() => navigate("/signup")}>
            SignUp
          </p>
        </>
      )}
    </div>
  );
};

export default Navbar;
