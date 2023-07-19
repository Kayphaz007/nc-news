import { BsChatText, BsHandThumbsUp } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        <p>
          <BsHandThumbsUp /> {votes}
        </p>
      </footer>
    </section>
  );
};

export default ArticleCard;
