import { useState } from "react";

const CommentInputBox = ({ setCommentBody, isLoadingComment }) => {
  const [commentInput, setCommentInput] = useState("");

  function handleInputSubmit(event) {
    event.preventDefault();
    setCommentBody(commentInput);
    setCommentInput("");
  }
  return (
    <section>
      <form onSubmit={handleInputSubmit}>
        <label htmlFor="commentBox"></label>
        <input
          id="commentBox"
          value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value);
          }}
          placeholder="Enter your comment..."
          disabled={isLoadingComment}
        />
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default CommentInputBox;
