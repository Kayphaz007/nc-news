import { BsHandThumbsUp } from "react-icons/bs";
import { timeSince } from "../utils/function";
import { AiOutlineUser } from "react-icons/ai";

const CommentCard = ({
  comment: { article_id, comment_id, body, author, created_at, votes },
}) => {
  let date = new Date().toLocaleDateString();
  return (
    <>
      <article className="comment-card">
        <main>
          <p>{body}</p>
        </main>
        <footer className="card-footer">
          <p>
            <AiOutlineUser />
            {author}
          </p>
          <p>
            <BsHandThumbsUp /> {votes}
          </p>
          <p>{timeSince(created_at)} ago</p>
        </footer>
      </article>
    </>
  );
};

export default CommentCard;
