import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function BlogPage() {
  const [post, setPost] = useState({});
  const params = useParams();
  console.log(params); //udskriver det slug navn man er inde på i log
  const slug = params.slug;

  useEffect(() => {
    async function getPost() {
      const url = `https://www.wpedugreen.mbcproduction.dk//wp-json/wp/v2/posts?slug=${slug}&_embed&v=99999`; //for at se i browser find i console eller ændre ${slug} til det unikke slug man vil se
      const response = await fetch(url);
      const data = await response.json();
      console.log(data[0]);
      setPost(data[0]);
    }
    getPost();
  }, [slug]);

  //   Se om det det virker
  return (
    <section className="blogPostPage paddingWide">
      {post.acf?.title ? (
        <div>
          <p className="font-describe-title">BLOGPOST</p>
          <h1>{post?.acf?.title}</h1>
          {post.acf?.headerimage ? (
            <img src={post.acf?.headerimage} alt={post.acf?.title} />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {post.acf?.section1_title ? (
        <article className="project-text">
          <h3>{post.acf?.section1_title}</h3>
          <p>{post.acf?.section1_text && parse(post.acf?.section1_text)}</p>
          {post.acf?.section1_image1 ? (
            <img
              src={post.acf?.section1_image1}
              alt={post.acf?.section1_title}
            />
          ) : (
            ""
          )}
          {post.acf?.section1_image2 ? (
            <img
              src={post.acf?.section1_image2}
              alt={post.acf?.section1_title}
            />
          ) : (
            ""
          )}
        </article>
      ) : (
        ""
      )}

      {post.acf?.section2_title ? (
        <article className="project-text">
          <h3>{post.acf?.section2_title}</h3>
          <p>{post.acf?.section2_text && parse(post.acf?.section2_text)}</p>
          {post.acf?.section2_image1 ? (
            <img
              src={post.acf?.section2_image1}
              alt={post.acf?.section2_title}
            />
          ) : (
            ""
          )}
          {post.acf?.section2_image2 ? (
            <img
              src={post.acf?.section2_image2}
              alt={post.acf?.section2_title}
            />
          ) : (
            ""
          )}
        </article>
      ) : (
        ""
      )}

      {post.acf?.section3_title ? (
        <article className="project-text">
          <h3>{post.acf?.section3_title}</h3>
          <p>{post.acf?.section3_text && parse(post.acf?.section3_text)}</p>
          {post.acf?.section3_image1 ? (
            <img
              src={post.acf?.section3_image1}
              alt={post.acf?.section3_title}
            />
          ) : (
            ""
          )}
          {post.acf?.section3_image2 ? (
            <img
              src={post.acf?.section3_image2}
              alt={post.acf?.section3_title}
            />
          ) : (
            ""
          )}
        </article>
      ) : (
        ""
      )}
    </section>
  );
}

/*
            {post.acf?.section1_title ? 
            <article>
                <h3>{post.acf?.section1_title}</h3>
                <p>{post.acf?.section1_text && parse(post.acf?.section1_text)}</p>
                {post.acf?.section1_image1 ? <img src={post.acf?.section1_image1} alt={post.acf?.section1_title}/> : ''}
                {post.acf?.section1_image2 ? <img src={post.acf?.section1_image2} alt={post.acf?.section1_title}/> : ''}
            </article>
            : ''}

            {post.acf?.section2_title ? 
            <article>
                <h3>{post.acf?.section2_title}</h3>
                <p>{post.acf?.section2_text && parse(post.acf?.section2_text)}</p>
                {post.acf?.section2_image1 ? <img src={post.acf?.section2_image1} alt={post.acf?.section2_title}/> : ''}
                {post.acf?.section2_image2 ? <img src={post.acf?.section2_image2} alt={post.acf?.section2_title}/> : ''}
            </article>
            : ''}

*/
