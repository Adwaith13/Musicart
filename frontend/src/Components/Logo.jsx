import logo from "../assets/images/musicLogo.png";
import logoStyles from "../styles/logo.module.css";
export default function Logo() {
  return (
    <div className={logoStyles.container}>
      <img src={logo} width={30} className={logoStyles.img}></img>
      <h1 className={logoStyles.head}>Musicart</h1>
    </div>
  );
}
