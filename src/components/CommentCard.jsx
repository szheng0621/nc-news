export default function CommentCard (props) {
    const {comment} = props

    return (
        <div className="comment-card">
            <p><strong>{comment.author}:</strong></p>
            <p>{comment.body}</p>
            <p><small>Posted on: {comment.created_at}</small></p>
        </div>
    );
}