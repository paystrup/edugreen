import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function BlogPage() {
  // set states for the posts
  const [post, setPost] = useState({});

  // useParams from React Router Dom to get the slug
  const params = useParams();
  console.log(params);
  const slug = params.slug;

  // Fetch data with useEffect, where the dependency hook is the slug
  // This way it listens after a new slug and rerenders every time it changes (a new post is clicked)

  // We have used an async function and await which asures that the data is not fetched before the function is completed (As JS is synchronous) */
  // Fetching from the WordPress REST API, where we made our blogposts (data) in the backend.
  // In WordPress we used the "custom fields" plugin to insert our data

  // fetch from WordPress REST API unique slug on post clicked -> navigation
  useEffect(() => {
    async function getPost() {
      const url = `https://www.wpedugreen.mbcproduction.dk//wp-json/wp/v2/posts?slug=${slug}&_embed&v=99999`; // fetching the unique posts by slug
      const response = await fetch(url);
      const data = await response.json();
      console.log(data[0]);
      // set the state with our data fetched
      setPost(data[0]);
    }
    // Complete the async
    getPost();
  }, [slug]);

  return (
    <section className="blogPostPage paddingWide PaddingPage bigscreenpadding">
      {/* Header */}
      {post.acf?.title ? (
        <div>
          <p className="font-describe-title font-padding">Blogpost</p>
          <h1 className="font-belyBig paddingHeader">{post?.acf?.title}</h1>
          {post.acf?.headerimage ? (
            <img src={post.acf?.headerimage} alt={post.acf?.title} />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {/* -- BLOGPOST CONTENT -- */}
      {/* Section 1 */}
      {post.acf?.section1_title ? (
        <article className="blogSection">
          <h3 className="font-header">{post.acf?.section1_title}</h3>
          <p className="font-bodytext">
            {post.acf?.section1_text && parse(post.acf?.section1_text)}
          </p>
        </article>
      ) : (
        ""
      )}

      {post.acf?.section1_image1 ? (
        <img src={post.acf?.section1_image1} alt={post.acf?.section1_title} />
      ) : (
        ""
      )}
      {post.acf?.section1_image2 ? (
        <img src={post.acf?.section1_image2} alt={post.acf?.section1_title} />
      ) : (
        ""
      )}

      {/* Section 2 */}
      {post.acf?.section2_title ? (
        <article className="blogSection">
          <h3 className="font-header">{post.acf?.section2_title}</h3>
          <p className="font-bodytext">
            {post.acf?.section2_text && parse(post.acf?.section2_text)}
          </p>
        </article>
      ) : (
        ""
      )}

      {post.acf?.section2_image1 ? (
        <img src={post.acf?.section2_image1} alt={post.acf?.section2_title} />
      ) : (
        ""
      )}
      {post.acf?.section2_image2 ? (
        <img src={post.acf?.section2_image2} alt={post.acf?.section2_title} />
      ) : (
        ""
      )}

      {/* Section 3 */}
      {post.acf?.section3_title ? (
        <article className="blogSection">
          <h3 className="font-header">{post.acf?.section3_title}</h3>
          <p className="font-bodytext">
            {post.acf?.section3_text && parse(post.acf?.section3_text)}
          </p>
        </article>
      ) : (
        ""
      )}

      {post.acf?.section3_image1 ? (
        <img src={post.acf?.section3_image1} alt={post.acf?.section3_title} />
      ) : (
        ""
      )}

      {post.acf?.section3_image2 ? (
        <img src={post.acf?.section3_image2} alt={post.acf?.section3_title} />
      ) : (
        ""
      )}
    </section>
  );
}
