import { useEffect, useState } from "react"
import { deleteCommentById, getComments } from "../apiCall"
import { useParams } from 'react-router-dom';
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

export default function CommentsList () {
    const [comments, setComments] = useState ([]);
    const { article_id } = useParams();
    const defaultUsername = "grumpy19"; 

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

    const deleteComment = (comment_id) => {
        return deleteCommentById(comment_id).then (() => {
            setComments ((currentComments) => {
                return currentComments.filter((currentComment) => currentComment.comment_id !== comment_id)
            }) 
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
                    return <CommentCard key={comment.comment_id} comment={comment} deleteComment={deleteComment} isAuthor={comment.author === defaultUsername}/>;
                })
            ) : (
                <p>No comments available for this article.</p>
            )}
        </ul>
        </section>
    );
}