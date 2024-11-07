import { useEffect, useState } from "react"
import { getComments } from "../apiCall"
import { useParams } from 'react-router-dom';
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

export default function CommentsList () {
    const [comments, setComments] = useState ([]);
    const { article_id } = useParams();

    const fetchComments = () => {
       return getComments(article_id).then((data) => {
        const commentsList = data.comments || [];
        setComments (commentsList);
       })
    };

    const addComment = (commentToAdd) => {
        setComments((currentComments) => {
            return [commentToAdd, ...currentComments]
        })
    }
   
    useEffect (() => {
        if (article_id) {
            fetchComments();
        }
    }, [article_id])

    return (
        <section>
            <CommentAdder addComment={addComment}/>
            <ul>
            {comments && comments.length > 0 ? (
                comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment} />;
                })
            ) : (
                <p>No comments available for this article.</p>
            )}
        </ul>
        </section>
    );
}