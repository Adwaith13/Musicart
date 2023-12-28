import Navbar from "../Components/Navbar";
import HomeLogo from "../Components/HomeLogo";
import Banner from "../Components/Banner";
import SearchBar from "../Components/SearchBar";
import Filters from "../Components/Filters";
import Grid from "../Components/Grid";
import List from "../Components/List";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("grid");

  return (
    <>
      <Navbar />
      <HomeLogo />
      <Banner />
      <SearchBar />
      <Filters view={view} setView={setView} />
      {view === "grid" ? <Grid /> : <List />}
    </>
  );
}
