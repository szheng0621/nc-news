import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../apiCall";
import CommentsList from "./CommentsList";
import VotesCounter from "./Votes";

export default function SingleArticle () {
    const [singleArticle, setSingleArticle] = useState ({});
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams ()

    useEffect (() => {
        getArticleById(article_id).then((articleDate) => {
            setSingleArticle(articleDate)
            setIsLoading(false)
        })
    }, [article_id])

    if(isLoading) {
        return <h2>...I'm Loading</h2>
      }else {
    return (
        <>
        <div className="single-article">
        <h2>{singleArticle.title}</h2>
        <p>{singleArticle.author}</p>
        <p><strong>Topic: </strong> {singleArticle.topic}</p>
        <img src={singleArticle.article_img_url}></img>
        <p>{singleArticle.body}</p>
        <p><strong>Posted:</strong> {singleArticle.created_at}</p>
        <VotesCounter />
    </div>
    <CommentsList />

    </>
    )


      }
}