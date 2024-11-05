import { useEffect, useState } from "react"
import { getComments } from "../apiCall"
import { useParams } from 'react-router-dom';
import CommentCard from "./CommentCard";

export default function CommentsList () {
    const [comments, setComments] = useState ([]);
    const { article_id } = useParams();

    const fetchComments = () => {
       return getComments(article_id).then((data) => {
        const commentsList = data.comments || [];
        setComments (commentsList);
       })
    };
   
    useEffect (() => {
        if (article_id) {
            fetchComments();
        }
    }, [article_id])

    return (
            <ul>
            {comments && comments.length > 0 ? (
                comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment} />;
                })
            ) : (
                <p>No comments available for this article.</p>
            )}
        </ul>
    );
}