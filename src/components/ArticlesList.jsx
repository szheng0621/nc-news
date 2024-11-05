import { useEffect, useState } from "react"
import { getArticles } from "../apiCall.js";
import ArticleCard from "./ArticleCard";

export default function ArticlesList () {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        getArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h2>...I'm Loading</h2>
      }else {
    return (
        <ul className="row">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
        })}
        </ul>
    )

    }
}