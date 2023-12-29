import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BackCart from "../Components/BackCart";
import HomeLogo from "../Components/HomeLogo";
import cartStyles from "../styles/cart.module.css";
import { fetchCart } from "../api/fetchCart";
import { Fragment, useEffect, useState } from "react";

export default function Cart() {
  const loginToken = localStorage.getItem("loginToken");
  console.log("login", loginToken);
  const registerToken = localStorage.getItem("registerToken");
  console.log("register", registerToken);
  let token;

  if (loginToken) {
    token = loginToken;
  } else if (registerToken) {
    token = registerToken;
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const response = await fetchCart(token);
        console.log(response.products);
        setData(response.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserCart();
  }, []);

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
            {data.map((item) => (
              <div key={item.product._id}>
                <img src={item.product.image} width={200}></img>
                <h2>{item.product.product_name}</h2>
                <p>Color - {item.product.product_color}</p>
                <p>{item.product.availability}</p>
                <p className={cartStyles.b}>
                  Estimated delivery : Monday — FREE Standard Delivery
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={cartStyles.summary}>
          <button className={cartStyles.placeOrderCheckout1}>
            Place Order
          </button>
          <p>
            By placing your order, you agree to Musicart privacy notice and
            conditions of use.
          </p>
          <hr />
          <h4>Order Summary</h4>
          {data.map((item) => (
            <>
              <p key={item.product._id}>Items: ₹{item.product.product_price}</p>
              <p>Delivery : ₹45</p>
              <p>Order Total - ₹{parseInt(item.product.product_price) + 45}</p>
            </>
          ))}
        </div>
      </div>

      <div className={cartStyles.orderBottom}>
        <button className={cartStyles.placeOrderCheckout2}>Place Order</button>
        {data.map((item) => (
          <Fragment key={item.product._id}>
            <span>
              Order Total - ₹{parseInt(item.product.product_price) + 45}
            </span>
            <br/>
            <span>
              By placing your order, you agree to Musicart privacy notice and
              conditions of use.
            </span>
          </Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
}
