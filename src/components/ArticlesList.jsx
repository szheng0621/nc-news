import { useEffect, useState } from "react"
import { getArticles } from "../apiCall.js";
import ArticleCard from "./ArticleCard";

export default function ArticlesList () {
    const [articles, setArticles] = useState([]);

    useEffect (() => {
        getArticles().then((articles) => {
            setArticles(articles)
        })
    }, [])

    return (
        <ul className="row">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
        })}
        </ul>
    )
}