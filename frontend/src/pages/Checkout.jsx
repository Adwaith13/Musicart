import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BackCart from "../Components/BackCart";
import HomeLogo from "../Components/HomeLogo";
import PlaceOrder from "../Components/PlaceOrder";
import cartStyles from "../styles/cart.module.css";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <HomeLogo />
      <BackCart />
      <h1 className={cartStyles.checkoutHead}>Checkout</h1>
      <div className={cartStyles.parent}>
        <div className={cartStyles.checkoutleft}>
          <div className={cartStyles.first}>
            <p className={cartStyles.a}>1.Delivery Address</p>
            <p className={cartStyles.b}>
              Akash Patel 104 kk hh nagar, Lucknow Uttar Pradesh 226025
            </p>
          </div>
          <hr />
          <div className={cartStyles.first}>
            <p className={cartStyles.a}>2.Payment method</p>
            <p className={cartStyles.b}>Pay on delivery ( Cash/Card)</p>
          </div>
          <hr></hr>
          <div className={cartStyles.first}>
            <p className={cartStyles.a}>3.Review Items and Delivery</p>
            {/*  <img></img> */}
            <p className={cartStyles.b}>Estimated delivery : Monday — FREE Standard Delivery</p>
          </div>
        </div>
        <div>Order Summary</div>
      </div>

      <PlaceOrder />
      <Footer />
    </div>
  );
}
