import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { postComment } from "../utils/api";

const CommentInputBox = ({
  setCommentBody,
  isLoadingComment,
  setIsLoadingComment,
  article_id,
  setComments,
}) => {
  const [commentInput, setCommentInput] = useState("");
  const { user } = useContext(UserContext);

  function handleInputSubmit(event) {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const data = { username: user, body: commentInput };
        await postComment(article_id, data);
        setIsLoadingComment(false);
        const newComment = {
          article_id,
          author: user,
          body: commentInput,
          votes: 0,
          created_at: new Date(),
        };
        setComments((prevComments) => {
          return [newComment, ...prevComments];
        });
      } catch (err) {
        if (err.message === "Network Error") {
          window.alert("No Internet Connection");
        }
      }
    };
    if (commentInput !== "") {
      setIsLoadingComment(true);
      fetchData();
    } else {
      window.alert("Please type something");
    }
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
