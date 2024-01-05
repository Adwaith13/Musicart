import search from "../assets/logos/search.svg";
import searchStyles from "../styles/search.module.css"
export default function SearchBar() {
  return (
    <div className={searchStyles.container}>
      <img src={search} className={searchStyles.logo}></img>
      <input type="text" placeholder="Search Product" className={searchStyles.input}></input>
    </div>
  );
}
