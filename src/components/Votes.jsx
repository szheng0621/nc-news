import { useEffect, useState } from "react";
import { getArticleById, patchVotes } from "../apiCall";
import { useParams } from 'react-router-dom';

export default function VotesCounter () {
    const [voteCount, setVoteCount] = useState(0)
    const [error, setError] = useState(null);
    const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
        setVoteCount(articleData.votes);
    })
    .catch((err) => {
        setError(err)
    })
  }, [article_id]);

  const handleLike = () => {
    setVoteCount((currentVoteCount) => currentVoteCount + 1);
    setError(null);
    patchVotes(article_id, { inc_votes: 1 }).then((updatedArticle) => {
                setVoteCount(updatedArticle.votes); 
            })
            .catch((err) => {
                setVoteCount((currentVoteCount) => currentVoteCount - 1); 
                setError("Your +vote was not successful. Please try again!") 
            })
  };

  const handleDislike = () => {
    setVoteCount((currentVoteCount) => currentVoteCount - 1);
    setError(null);
    patchVotes(article_id, { inc_votes: -1 }).then((updatedArticle) => {
                setVoteCount(updatedArticle.votes); 
            }).catch((err) => {
                setVoteCount((currentVoteCount) => currentVoteCount + 1); 
                setError("Your -vote was not successful. Please try again!") 
            })
  };

    return (
        <div>
        <p><strong>Votes:</strong> {voteCount}</p>
        <section className="btn-group">
      <button onClick={handleLike}>+ Vote</button>
      <button onClick={handleDislike}>- Vote</button>
      {error ? <p>{error}</p> : null}
      </section>
    </div>
    )
}