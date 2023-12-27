import logo from "../assets/images/musicLogo.png";
import logoStyles from "../styles/logo.module.css";
export default function Logo() {
  return (
    <div className={logoStyles.home}>
      <img src={logo} width={30} className={logoStyles.img}></img>
      <h1 className={logoStyles.head}>Musicart</h1>
      <h2 className={logoStyles.homeText}>Home</h2>
    </div>
  );
}
