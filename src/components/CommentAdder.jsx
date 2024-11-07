import { useState } from "react";
import { postComment } from "../apiCall";
import { useParams } from "react-router-dom";


export default function CommentAdder (props) {
    const {addComment} = props
    const [userComment, setUserComment] = useState("");
    const [isPosting, setIsPosting] = useState (false);
    const [postSuccessMessage, setPostSuccessMessage] = useState("");
    const [error, setError] = useState (null);
    const { article_id } = useParams ();
    const defaultUsername = "grumpy19"; 

    
    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        setPostSuccessMessage("");
      
        postComment(article_id, { username: defaultUsername, body: userComment }).then(({comment}) => {
            addComment(comment); 
            setUserComment("");
            setIsPosting(true);  
            setPostSuccessMessage("Your comment is posted!");
        })
        .catch((err) => {
            console.error("Error in posting comment:", err)
            setError("Post unsuccessful");
            setIsPosting(false);
            alert("Your comment didn't post") 
        });    
    }

    const onChangeHandler = (event) => {
        setUserComment(event.target.value);
        setPostSuccessMessage("");           
    }

    return (
        <form className="commentAdder-container" onSubmit={handleSubmit}>
            <label htmlFor="new-comment">Add a comment:</label>
            <input 
            id="new-comment"
            type="text"
            value={userComment}
            onChange={onChangeHandler}
            placeholder="Have you say"
            />
            <button disabled={isPosting || error !== null }>Post</button>
            {error && <p>{error}</p>}
            {postSuccessMessage && <p>{postSuccessMessage}</p>}
        </form>
    
    )
}