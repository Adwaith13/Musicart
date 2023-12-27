import Navbar from "../Components/Navbar";
import HomeLogo from "../Components/HomeLogo";
import Banner from "../Components/Banner";
import SearchBar from "../Components/SearchBar";
import Filters from "../Components/Filters";
import Grid from "../Components/Grid";
import List from "../Components/List";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeLogo />
      <Banner />
      <SearchBar />
      <Filters />
     {/*  <List /> */}
       <Grid />
    </>
  );
}
