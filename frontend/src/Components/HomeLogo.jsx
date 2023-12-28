import logo from "../assets/images/musicLogo.png";
import logoStyles from "../styles/logo.module.css";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className={logoStyles.home} onClick={()=>navigate("/")}>
      <img src={logo} width={30} className={logoStyles.img}></img>
      <h1 className={logoStyles.head}>Musicart</h1>
      <h2 className={logoStyles.homeText}>Home</h2>
    </div>
  );
}
