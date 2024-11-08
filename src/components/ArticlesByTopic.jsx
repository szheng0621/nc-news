import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../apiCall";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";

export default function ArticlesByTopic () {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { topic } = useParams();

    useEffect (() => {
        getArticlesByTopic(topic).then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [topic])

    if(isLoading) { return <h2>...I'm Loading</h2>}
    return (
        <div className="main-page_title">
        <h2>Special {topic} articles</h2> 
        <ul className="row">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
        })}
        </ul>
        </div>
    )

    
}