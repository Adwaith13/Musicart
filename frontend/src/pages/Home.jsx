import Navbar from "../Components/Navbar";
import HomeLogo from "../Components/HomeLogo";
import Banner from "../Components/Banner";
import SearchBar from "../Components/SearchBar";
import Filters from "../Components/Filters";
import Grid from "../Components/Grid";
import List from "../Components/List";
import FilteredBrands from "../Components/FilteredBrands";
import FilteredType from "../Components/FilteredType";
import FilteredColors from "../Components/FilteredColors";
import SortedProductsLow from "../Components/SortedProductsLow";
import SortedProductsHigh from "../Components/SortedProductsHigh";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("grid");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [filteredComponent, setFilteredComponent] = useState(null);

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    setFilteredComponent("brand");
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setFilteredComponent("type");
  };

  const handleColorFilter = (color) => {
    setSelectedColor(color);
    setFilteredComponent("color");
  };

  const handleSortFilter = (sortOption) => {
    // Handle the sorting options
    switch (sortOption) {
      case 'Price:Lowest':
        setFilteredComponent('sortedLow');
        break;
      case 'Price:Highest':
        setFilteredComponent('sortedHigh');
        break;
      default:
        setFilteredComponent(null);
        break;
    }
  };

  const renderFilteredComponent = () => {
    switch (filteredComponent) {
      case 'brand':
        return selectedBrand && <FilteredBrands selectedBrand={selectedBrand} />;
      case 'type':
        return selectedType && <FilteredType selectedType={selectedType} />;
      case 'color':
        return selectedColor && <FilteredColors selectedColor={selectedColor} />;
      case 'sortedLow':
        return <SortedProductsLow />;
      case 'sortedHigh':
        return <SortedProductsHigh />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <HomeLogo />
      <Banner />
      <SearchBar />
      <Filters
        view={view}
        setView={setView}
        handleBrandFilter={handleBrandFilter}
        handleTypeFilter={handleTypeFilter}
        handleColorFilter={handleColorFilter}
        handleSortFilter={handleSortFilter}
      />
      {renderFilteredComponent()}
      {view === "grid" ? <Grid /> : <List />}
    </>
  );
}
