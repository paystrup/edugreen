import React from "react";
import BigCarousel from "./BigCarousel";
import { useEffect, useState } from "react";

export default function BigCarouselLanding() {
  const [posts, setPosts] = useState([]);

  /* We use UseEffect to fetch */
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://www.wpedugreen.mbcproduction.dk//wp-json/wp/v2/posts?_embed&v=99999"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    getData();
  }, []);

  return (
    <section className="carouselSection">
      <div className="carouselHeader">
        <h2 className="font-belyBig">Køb og sælg dine brugte studiebøger</h2>
      </div>

      <div>
        {/* Import component and send posts as props */}
        <BigCarousel posts={posts} />
      </div>
    </section>
  );
}
