import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Blog'
        
        async function getArticles() {

            const request = await fetch(
                "https://api.spaceflightnewsapi.net/v3/blogs"
            );
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }

        getArticles();
    }, []);

    return (
        <section className="section">
            <h1>Blog</h1>

            {loading ? "Loading..." : 
            <div>
                {articles.map(function(article) {
                    return <Link className="article-title" key={article.id} to={`/blog/${article.id}`}><h3>{article.title}</h3></Link>
                })}    
            </div>
            }
        </section>
    );
}
