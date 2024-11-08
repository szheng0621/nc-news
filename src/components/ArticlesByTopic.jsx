import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../apiCall";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";

export default function ArticlesByTopic () {

    const [articles, setArticles] = useState([]);
    const [sortBy, setSortBy] = useState ("created_at")
    const [order, setOrder] = useState ("desc")
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState (null)
    const { topic } = useParams();

    useEffect (() => {
        setError(null);
        setIsLoading(true);
        getArticlesByTopic({ sort_by: sortBy, order, topic }).then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [sortBy, order, topic])

    const handleSorting = (event) => {
        setSortBy(event.target.value)
    }

    const handleOrdering = (event) => {
        setOrder(event.target.value)
    }

    if(isLoading) {
        return <p>...I'm Loading</p>;
    }

    if (error) return <p>{error}</p>

    return (
        <div className="main-page_title">
        <h2>Special {topic} articles</h2> 

        <div className="sort-control">
                <label>Sort by </label>
                <select value={sortBy} onChange={handleSorting}>
                    <option value={"created_at"}>Date</option>
                    <option value={"title"}>Title</option>
                    <option value={"votes"}>Votes</option>
                    <option value={"topic"}>Topic</option>
                    <option value={"Comment_count"}>Comment Count</option>
                </select>

                <label>Order by:</label>
                <select value={order} onChange={handleOrdering}>
                    <option value={"asc"}>Ascending</option>
                    <option value={"desc"}>Descending</option>
                </select>
            </div>

        <ul className="article-list">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
        })}
        </ul>
        </div>
    )

    
}