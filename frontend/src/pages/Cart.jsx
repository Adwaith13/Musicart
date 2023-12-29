import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Back from "../Components/Back";
import HomeLogo from "../Components/HomeLogo";
import bag from "../assets/logos/bag.svg";
import cartStyles from "../styles/cart.module.css";
import { fetchCart } from "../api/fetchCart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <Back />
      <h1 className={cartStyles.header}>
        <img src={bag} width={30} className={cartStyles.image}></img>My Cart
      </h1>
      <div className={cartStyles.container}>
        {data.map((item) => (
          <>
            <div className={cartStyles.left} key={item.product._id}>
              <img src={item.product.image} width={200}></img>
              <h1>{item.product.product_name}</h1>
              <p>{item.product.product_price}</p>
              <p>Quantity-{item.count}</p>
              <p>Total - {item.product.product_price}</p>
              <h4>
                {item.count} Item - ₹{parseInt(item.product.product_price)*parseInt(item.count)}
              </h4>
            </div>
          </>
        ))}

        {data.map((item) => (
          <div className={cartStyles.right} key={item.product._id}>
            <h3>Price Details</h3>
            <p>Total MRP - ₹{item.product.product_price}</p>
            <p>Discount on MRP -₹</p>
            <p>Convenience Fee ₹45</p>
            <p>Total Amount - ₹{parseInt(item.product.product_price) + 45}</p>
          </div>
        ))}
      </div>
      <button
        className={cartStyles.placeOrderCart}
        onClick={() => navigate("/checkout")}
      >
        Place Order
      </button>
      <Footer />
    </div>
  );
}
