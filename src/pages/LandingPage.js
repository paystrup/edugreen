import React from "react";
import Articleteaser from "../components/ArticleTeaser";
import BigCarouselLanding from "../components/BigCarouselLanding";
import BookAgent from "../components/BookAgent";
import PlanetCard from "../components/PlanetCard";
import SearchItem from "../components/SearchItem";

export default function LandingPage() {
  const header1 = "Multimediedesign";
  const header2 = "Nyeste bøger";
  return (
    <div className="PaddingPage">
      {/* Import component and send posts as props */}
      <SearchItem/>
      <BigCarouselLanding />
      <Articleteaser header={header1}/>
      <BookAgent />
      <Articleteaser header={header2}/>
      <PlanetCard />
    </div>
  );
}
