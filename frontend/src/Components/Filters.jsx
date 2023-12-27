import filterStyle from "../styles/filters.module.css"
export default function Filters() {
  return (
    <div className={filterStyle.container}>
      <select>
        <option disabled selected>Headphone Type</option>
        <option>Price:Lowest</option>
        <option>Price:Highest</option>
        <option>Name:(A-Z)</option>
        <option>Name:(Z-A)</option>
      </select>

      <select>
        <option disabled selected>Company</option>
        <option>Price:Lowest</option>
        <option>Price:Highest</option>
        <option>Name:(A-Z)</option>
        <option>Name:(Z-A)</option>
      </select>

      <select>Color
        <option disabled selected>Color</option>
        <option>Price:Lowest</option>
        <option>Price:Highest</option>
        <option>Name:(A-Z)</option>
        <option>Name:(Z-A)</option>
      </select>

      <select>
        <option disabled selected>Price</option>
        <option>Price:Lowest</option>
        <option>Price:Highest</option>
        <option>Name:(A-Z)</option>
        <option>Name:(Z-A)</option>
      </select>

      <select>
        <option disabled selected>Sort by - Featured</option>
        <option>Price:Lowest</option>
        <option>Price:Highest</option>
        <option>Name:(A-Z)</option>
        <option>Name:(Z-A)</option>
      </select>
    </div>
  );
}
