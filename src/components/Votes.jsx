import { useEffect, useState } from "react";
import { getArticleById, patchVotes } from "../apiCall";
import { useParams } from 'react-router-dom';

export default function VotesCounter () {
    const [voteCount, setVoteCount] = useState(0)
    const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
        setVoteCount(articleData.votes);
    })
  }, [article_id]);

  const handleLike = () => {
    setVoteCount((currentVoteCount) => currentVoteCount + 1);
    patchVotes(article_id, { inc_votes: 1 }).then((updatedArticle) => {
                setVoteCount(updatedArticle.votes); 
            })
  };

  const handleDislike = () => {
    setVoteCount((currentVoteCount) => currentVoteCount - 1);
    patchVotes(article_id, { inc_votes: -1 }).then((updatedArticle) => {
                setVoteCount(updatedArticle.votes); 
            })
  };

    return (
        <div>
        <p><strong>Votes:</strong> {voteCount}</p>
        <section className="btn-group">
      <button onClick={handleLike}>+ Vote</button>
      <button onClick={handleDislike}>- Vote</button>
      </section>
    </div>
    )
}