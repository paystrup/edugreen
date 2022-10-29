import React from "react";
import BigCarousel from "./BigCarousel";
import { useEffect, useState } from "react";

export default function BigCarouselLanding() {
  // state to store our data
  const [posts, setPosts] = useState([]);

  // Fetch from WP REST Api with useEffect, empty dependency array
  // -> fetches on rerender
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://www.wpedugreen.mbcproduction.dk//wp-json/wp/v2/posts?_embed&v=99999"
      );
      const data = await response.json();
      console.log(data); // check if fetch works
      setPosts(data); // store wp data in state
    }
    getData(); // run the function, async
  }, []);

  return (
    <section className="carouselSection">
      <div className="carouselHeader">
        <h2 className="font-belyBig">Køb og sælg dine brugte studiebøger</h2>
      </div>

      <div>
        {/* Import component and send posts (fetched data) as props */}
        <BigCarousel posts={posts} />
      </div>
    </section>
  );
}
