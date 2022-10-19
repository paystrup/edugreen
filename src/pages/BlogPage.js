import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <section className="blogPostPage paddingWide">
            <div>
                <p className='font-describe-title'>BLOGPOST</p>
                <h1>{post?.acf?.title}</h1>
                {post.acf?.image ? <img src={post.acf?.image} alt={post.acf?.image.alt}/> : ''}
                {post.acf?.headerimage ? <img src={post.acf?.headerimage} alt={post.acf?.headerimage.alt}/> : ''}

                <img src={post.wp:featuredmedia.headerimage} alt={post.acf?.headerimage.alt}/>
                
                
            </div>
        </section>
    )
}

//<img src={post._embedded["wp:featuredmedia"][0].source_url} alt={post.acf?.headerimage.alt}/>