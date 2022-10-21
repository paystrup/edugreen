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


  return (
    <section className="blogPostPage paddingWide PaddingPage">

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

      {post.acf?.section1_title ? (
        <article className="blogSection">
          <h3 className="font-header">{post.acf?.section1_title}</h3>
          <p className="font-bodytext">{post.acf?.section1_text && parse(post.acf?.section1_text)}</p>
        </article>
      ) : ''}

      {post.acf?.section1_image1 ?
        <img src={post.acf?.section1_image1} alt={post.acf?.section1_title}/> 
      : ''} 
      {post.acf?.section1_image2 ?
        <img src={post.acf?.section1_image2} alt={post.acf?.section1_title}/> 
      : ''}
     
      

      {post.acf?.section2_title ? (
        <article className="blogSection">
          <h3 className="font-header">{post.acf?.section2_title}</h3>
          <p className="font-bodytext">{post.acf?.section2_text && parse(post.acf?.section2_text)}</p>
        </article>
      ) : ''}
          
      {post.acf?.section2_image1 ?
        <img src={post.acf?.section2_image1} alt={post.acf?.section2_title}/>
      : ''}
      {post.acf?.section2_image2 ?
        <img src={post.acf?.section2_image2} alt={post.acf?.section2_title}/>
      : ''}
        

      {post.acf?.section3_title ? (
        <article className="blogSection">
          <h3 className="font-header">{post.acf?.section3_title}</h3>
          <p className="font-bodytext">{post.acf?.section3_text && parse(post.acf?.section3_text)}</p>
        </article>
      ) : ''}

      {post.acf?.section3_image1 ?
        <img src={post.acf?.section3_image1} alt={post.acf?.section3_title}/>
      : ''}

      {post.acf?.section3_image2 ?
        <img src={post.acf?.section3_image2} alt={post.acf?.section3_title}/>
      : ''}
    </section>
  );
}


/*

      <button onClick={() => navigate(-1)}><ArrowNarrowLeftIcon/><p className="font-bodytext">GÅ TILBAGE</p></button>


      <div className="PracticalIcon goBack">
        <button onClick={() => navigate(-1)} className="flex iconsize goBackp"><ArrowNarrowLeftIcon/>GÅ TILBAGE</button>
      </div>

      */