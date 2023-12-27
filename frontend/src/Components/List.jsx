import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import gridStyles from "../styles/grid.module.css";

export default function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const payload = await fetchProducts();
        setData(payload.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  console.log(data);
  return (
    <div className={gridStyles.listContainer}>
      {data.map((item, index) => (
        <div key={index} className={gridStyles.listProduct}>
          <div className={gridStyles.listcontainer}>
            {item.image.map((imageUrl, imageIndex) => (
              <img
                className={gridStyles.image}
                src={imageUrl}
                key={imageIndex}
                alt="product-image"
                width={250}
                height={250}
              ></img>
            ))}
            <div className={gridStyles.detailcontainer}>
              <p className={gridStyles.name}>{item.product_name}</p>
              <p className={gridStyles.listdetail}>
                Price - ₹{item.product_price}
              </p>
              <p className={gridStyles.listdetail}>
                {item.product_color} | {item.product_type}
              </p>
              <p className={gridStyles.listdetail}>{item.product_head}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
