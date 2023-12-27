import woman from "../assets/images/woman.png";
import bannerStyles from "../styles/banner.module.css";

export default function Banner() {
  return (
    <>
      <img src={woman} className={bannerStyles.image}></img>
      <div className={bannerStyles.container}>
        <h1 className={bannerStyles.head1}>Grab upto 50% Off on</h1>
        <h1 className={bannerStyles.head2}>Selected Headphones</h1>
        <button className={bannerStyles.btn}>Buy Now</button>
      </div>
    </>
  );
}
