import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { decreaseArticleVote, increaseArticleVote } from "../utils/api";
import { useState } from "react";

const Vote = ({ article_id, votes }) => {
  const [voteCount, setVoteCount] = useState(votes);
  async function increaseVote() {
    try {
      setVoteCount((prevVote) => {
        return prevVote + 1;
      });
      await increaseArticleVote(article_id);
    } catch (err) {
      setVoteCount(() => {
        return votes;
      });
      window.alert("There was an error");
    }
  }
  async function decreaseVote() {
    try {
      setVoteCount((prevVote) => {
        return prevVote - 1;
      });
      await decreaseArticleVote(article_id);
    } catch (err) {
      setVoteCount(() => {
        return votes;
      });
    }
  }
  return (
    <>
      <p className="votes">
        <button onClick={increaseVote}>
          <BsHandThumbsUp />
        </button>
        {voteCount}
        <button onClick={decreaseVote}>
          <BsHandThumbsDown />
        </button>
      </p>
    </>
  );
};

export default Vote;
