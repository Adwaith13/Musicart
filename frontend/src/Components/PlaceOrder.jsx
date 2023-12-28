import cartStyles from "../styles/cart.module.css";
export default function PlaceOrder() {
  return (
    <div>
      <button className={cartStyles.placeOrder}>Place Order</button>
    </div>
  );
}
