import { useState } from "react";

export default function CommentCard (props) {
    const {comment, deleteComment, isAuthor} = props;
    const [isDeleted, setIsDeleted] = useState (false);

    const handleDelete = () => {
        setIsDeleted(false);
        deleteComment(comment.comment_id).then(() => {
            setIsDeleted(true);
        }).catch ((error) => {
            setIsDeleted(false);
            return error
        });
        
    }

    return (
        <>
        {isDeleted ? (
                <p>Your comment is sucessfully deleted!</p>
            ) : (
        <div className="comment-card">
            <p><strong>{comment.author}:</strong></p>
            <p>{comment.body}</p>
            <p><small>Posted on: {comment.created_at}</small></p>
            {isAuthor && <button onClick={handleDelete} className="delete-btn">Delete</button>}
        </div>
        )}
        </>
    );
}