import { BsChatText, BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { decreaseArticleVote, increaseArticleVote } from "../utils/api";
import { useState } from "react";

const ArticleCard = ({
  articleData: {
    title,
    article_id,
    topic,
    author,
    created_at,
    article_img_url,
    comment_count,
    votes,
  },
}) => {
  const [voteCount, setVoteCount] = useState(votes);
  async function increaseVote() {
    try {
      setVoteCount((prevVote) => {
        return prevVote + 1;
      });
      await increaseArticleVote(article_id);
    } catch (err) {
      console.log(err);
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
      console.log(err);
      setVoteCount(() => {
        return votes;
      });
    }
  }
  return (
    <section className="articleCard">
      <header className="card-header">
        <p>{author}</p>
        <p>{created_at.slice(0, 10)}</p>
      </header>
      <Link to={`/articles/${article_id}`}>
        <main className="card-main">
          <h2>{title}</h2>
          <img className="card-img" src={article_img_url} />
        </main>
      </Link>
      <footer className="card-footer">
        <p>{topic}</p>
        <p>
          <BsChatText size={20} />
          {comment_count}
        </p>
        <p className="votes">
          <button onClick={increaseVote}>
            <BsHandThumbsUp />
          </button>
          {voteCount}
          <button onClick={decreaseVote}>
            <BsHandThumbsDown />
          </button>
        </p>
      </footer>
    </section>
  );
};

export default ArticleCard;
