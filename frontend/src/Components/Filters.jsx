import filterStyle from "../styles/filters.module.css";
import grid_notselected from "../assets/logos/grid_notselected.svg";
import grid_selected from "../assets/logos/grid_selected.svg";
import list_notselected from "../assets/logos/list_notselected.svg";
import list_selected from "../assets/logos/list_selected.svg";
import { fetchColor } from "../api/fetchColor";
import { fetchType } from "../api/fetchType";
import { fetchBrand } from "../api/fetchBrand";
import { useEffect, useState } from "react";

export default function Filters({ view, setView }) {
  const handleView = (selectedview) => {
    setView(selectedview);
  };

  const [color, setColor] = useState([]);
  const [brand, setBrand] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    const fetchColorData = async () => {
      try {
        const data = await fetchColor();
        setColor(data.color);
        console.log(data.color);
      } catch (error) {
        console.log(error);
      }
    };
    fetchColorData();
  }, []);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const data = await fetchBrand();
        setBrand(data.brand);
        console.log(data.brand);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrandData();
  }, []);

  useEffect(() => {
    const fetchTypeData = async () => {
      try {
        const data = await fetchType();
        setType(data.product_type);
        console.log(data.product_type);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTypeData();
  }, []);

  return (
    <div className={filterStyle.container}>
      <img
        className={filterStyle.gridIcon}
        src={view === "grid" ? grid_selected : grid_notselected}
        onClick={() => handleView("grid")}
        alt="Grid View"
      />
      <img
        className={filterStyle.listIcon}
        src={view === "list" ? list_selected : list_notselected}
        onClick={() => handleView("list")}
        alt="List View"
      />
      <div className={filterStyle.filterContainer}>
        <select className={filterStyle.type}>
          <option disabled selected>
            Headphone Type
          </option>
          {type.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        <select className={filterStyle.type}>
          <option disabled selected>
            Company
          </option>
          {brand.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        <select className={filterStyle.type}>
          <option disabled selected>
            Color
          </option>
          {color.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        <select className={filterStyle.type}>
          <option disabled selected>
            Price
          </option>
          <option>Price:Lowest</option>
          <option>Price:Highest</option>
          <option>Name:(A-Z)</option>
          <option>Name:(Z-A)</option>
        </select>

        <select className={filterStyle.sort}>
          <option disabled selected>
            Sort by - Featured
          </option>
          <option>Price:Lowest</option>
          <option>Price:Highest</option>
          <option>Name:(A-Z)</option>
          <option>Name:(Z-A)</option>
        </select>
      </div>
    </div>
  );
}
