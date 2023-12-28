import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Back from "../Components/Back";
import HomeLogo from "../Components/HomeLogo";
import PlaceOrder from "../Components/PlaceOrder";
import bag from "../assets/logos/bag.svg";
import cartStyles from "../styles/cart.module.css";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <HomeLogo />
      <Back />
      <h1 className={cartStyles.header}>
        <img src={bag} width={30} className={cartStyles.image}></img>My Cart
      </h1>
      <div className={cartStyles.container}>
        <div className={cartStyles.left}>
          <p>Hi</p>
        </div>
        <div className={cartStyles.right}>
          <p>Hi</p>
        </div>
      </div>
      <PlaceOrder />
      <Footer />
    </div>
  );
}
