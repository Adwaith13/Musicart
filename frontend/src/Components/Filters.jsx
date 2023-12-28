import filterStyle from "../styles/filters.module.css";
import grid_notselected from "../assets/logos/grid_notselected.svg";
import grid_selected from "../assets/logos/grid_selected.svg";
import list_notselected from "../assets/logos/list_notselected.svg";
import list_selected from "../assets/logos/list_selected.svg";

export default function Filters({ view, setView }) {
  const handleView = (selectedview) => {
    setView(selectedview);
  };
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
          <option>Price:Lowest</option>
          <option>Price:Highest</option>
          <option>Name:(A-Z)</option>
          <option>Name:(Z-A)</option>
        </select>

        <select className={filterStyle.type}>
          <option disabled selected>
            Company
          </option>
          <option>Price:Lowest</option>
          <option>Price:Highest</option>
          <option>Name:(A-Z)</option>
          <option>Name:(Z-A)</option>
        </select>

        <select className={filterStyle.type}>
          <option disabled selected>
            Color
          </option>
          <option>Price:Lowest</option>
          <option>Price:Highest</option>
          <option>Name:(A-Z)</option>
          <option>Name:(Z-A)</option>
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
