import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const urlParams = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function getArticle() {
            const request = await fetch(
                `https://api.spaceflightnewsapi.net/v3/blogs/${urlParams.id}`
            );

            if (!request.ok) {
                setLoading(false);
                return setNotFound(true)
            }

            const response = await request.json();
            document.title = response.title

            setArticle(response);

            setLoading(false);
        }

        getArticle();

    }, [urlParams]);

    if (notFound) {
        return <p className="section">Artikel tidak ditemukan :(</p>
    }

    return (
        <section className="section">
            {loading ? "Loading..." : 
            <>
                <h2>{article.title}</h2>
                <div>Published at: {new Date(article.publishedAt).toLocaleDateString()}</div>
                <div>Updated at: {new Date(article.updatedAt).toLocaleDateString()}</div>
                <br/>
                <article>
                    <img className="article-image" alt={article.title} src={article.imageUrl}></img>
                    <p>{article.summary}</p>
                </article>
                <div>Source: <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></div>
            </>
            }
        </section>
    );
}