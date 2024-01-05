import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BackCart from "../Components/BackCart";
import HomeLogo from "../Components/HomeLogo";
import cartStyles from "../styles/cart.module.css";
import { fetchCart } from "../api/fetchCart";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFooter from "../Components/MobileFooter";

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

  const navigate = useNavigate();

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
                <img
                  src={item.product.image}
                  width={200}
                  className={cartStyles.checkoutImg}
                ></img>
                <h2 className={cartStyles.checkoutName}>
                  {item.product.product_name}
                </h2>
                <p className={cartStyles.checkoutDetails}>
                  Color - {item.product.product_color}
                </p>
                <p className={cartStyles.checkoutDetails}>
                  {item.product.availability}
                </p>
                <p className={cartStyles.delivery}>
                  Estimated delivery : Monday — FREE Standard Delivery
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={cartStyles.summary}>
          <button
            className={cartStyles.placeOrderCheckout1}
            onClick={() => navigate("/thanks")}
          >
            Place Order
          </button>
          <p className={cartStyles.summaryText}>
            By placing your order, you agree to Musicart privacy notice and
            conditions of use.
          </p>
          <hr />
          <h4 className={cartStyles.summaryOrderSumm}>Order Summary</h4>
          {data.map((item) => (
            <>
              <p key={item.product._id} className={cartStyles.summItems}>
                Items:{" "}
                <span className={cartStyles.price1}>
                  ₹{item.product.product_price}
                </span>
              </p>
              <p className={cartStyles.summItems}>Delivery : ₹45</p>
              <hr />
              <p className={cartStyles.total}>
                Order Total :
                <span className={cartStyles.price}>
                  ₹{parseInt(item.product.product_price) + 45}
                </span>
              </p>
            </>
          ))}
        </div>
      </div>

      <div className={cartStyles.orderBottom}>
        <button
          className={cartStyles.placeOrderCheckout2}
          onClick={() => navigate("/thanks")}
        >
          Place Order
        </button>
        {data.map((item) => (
          <Fragment key={item.product._id}>
            <span className={cartStyles.bottomPrice}>
              Order Total - ₹{parseInt(item.product.product_price) + 45}
            </span>
            <br></br>
            <button
              className={cartStyles.placeOrderCheckout3}
              onClick={() => navigate("/thanks")}
            >
              Place Order
            </button>
            <br />
            <span className={cartStyles.text}>
              By placing your order, you agree to Musicart privacy notice and
              conditions of use.
            </span>
          </Fragment>
        ))}
      <MobileFooter />
      </div>
    </div>
  );
}
