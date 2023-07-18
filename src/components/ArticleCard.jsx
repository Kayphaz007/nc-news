import React from "react";
import { BsChatText, BsHandThumbsUp } from "react-icons/bs";

const ArticleCard = ({
  articleData: {
    title,
    topic,
    author,
    created_at,
    article_img_url,
    comment_count,
    votes,
  },
}) => {
  return (
    <section className="articleCard">
      <header>
        <p>{author}</p>
        <p>{created_at.slice(0, 10)}</p>
      </header>
      <main>
        <p>{title}</p>
        <img src={article_img_url} />
      </main>
      <footer>
        <p>{topic}</p>
        <p>
          <BsChatText size={20} />
          {comment_count}
        </p>
        <p>
          <BsHandThumbsUp /> {votes}
        </p>
      </footer>
    </section>
  );
};

export default ArticleCard;
