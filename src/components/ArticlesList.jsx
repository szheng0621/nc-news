import { useEffect, useState } from "react"
import { getArticles, getArticlesByTopic } from "../apiCall.js";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

export default function ArticlesList () {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState (null)
    const { topic } = useParams();

    useEffect (() => {
        
        setError(null)
        const apiCall = topic ? getArticlesByTopic(topic) : getArticles();

        apiCall
        .then((articles) => {    
            setArticles(articles)
            setIsLoading(false)
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
        })
    }, [topic]);

    if(isLoading) {
        return <p>...I'm Loading</p>;
    }

    if (error) return <p>{error}</p>
     
    return (
        <ul className="row">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
        })}
        </ul>
    )

    
}