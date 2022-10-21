import React from "react";
import Articleteaser from "../components/ArticleTeaser";
import BigCarouselLanding from "../components/BigCarouselLanding";
import BookAgent from "../components/BookAgent";

export default function LandingPage() {

  return (
    <div className="PaddingPage">

      <BigCarouselLanding />
      <Articleteaser />
      <BookAgent />
    </div>
  );
}
