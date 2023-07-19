const CommentCard = ({ comment: { comment_id, body } }) => {
  return (
    <>
      <article className="comment-card">
        <p>{body}</p>
      </article>
    </>
  );
};

export default CommentCard;
