import React from "react";
import Articleteaser from "../components/ArticleTeaser";
import ArticleTeaserCategory from "../components/ArticleTeaserCategory";
import BigCarouselLanding from "../components/BigCarouselLanding";
import BookAgent from "../components/BookAgent";
import LoginToast from "../components/LoginToast";
import PlanetCard from "../components/PlanetCard";
import SearchItem from "../components/SearchItem";

export default function LandingPage() {
  // header props for carousel cards -> dynamic headers
  // const q = query(articleRef, where("education", "==", "Pædagog")); sort by education
  const header1 = "Multimediedesign";

  const header2 = "Nyeste bøger";

  // if we had time to add user descriptions and education
  // the plan was to pass in user.education and fetch the desired
  // category for each individual user below
  // now we're just using our education as an example
  
  return (
    <div className="PaddingPage">
      <SearchItem/>
      <LoginToast />
      <BigCarouselLanding />
      <ArticleTeaserCategory header={header1} sortCategory="education" sortCondition="==" sortEducation="Multimediedesigner"/>
      <BookAgent />
      <Articleteaser header={header2}/>
      <PlanetCard />
    </div>
  );
}
