import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, postComment } from "../utils/api";
import Vote from "../components/Vote";
import Comments from "../components/Comments";
import CommentInputBox from "../components/CommentInputBox";
import { UserContext } from "../context/UserContext";

const SingleArticle = () => {
  const { user } = useContext(UserContext);
  const [article, setArticle] = useState("");
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [isLoadingComment, setIsLoadingComment] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = { username: user, body: commentBody };
      const result = await postComment(article_id, data);
      setCommentBody("");
      setIsLoadingComment(false);
    };
    if (commentBody !== "") {
      setIsLoadingComment(true);
      fetchData();
    }
  }, [commentBody]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { article: receivedArticles },
          //   data,
        } = await getArticleById(article_id);
        setArticle(receivedArticles);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>Error..</p>;
  }
  const {
    title,
    topic,
    author,
    created_at,
    body,
    article_img_url,
    comment_count,
    votes,
  } = article;
  return (
    <>
      <section>
        <header className="card-header">
          <p>{author}</p>
          <p>{created_at.slice(0, 10)}</p>
        </header>
        <main>
          <h1>{title}</h1>
          <img className="single-image" src={article_img_url} />
          <p>{body}</p>
        </main>
        <footer>
          <Vote article_id={article_id} votes={votes} />
        </footer>
      </section>
      <section>
        <h2>Comments</h2>
        <Comments
          commentBody={commentBody}
          isLoadingComment={isLoadingComment}
        />
      </section>
      <CommentInputBox
        setCommentBody={setCommentBody}
        isLoadingComment={isLoadingComment}
      />
    </>
  );
};

export default SingleArticle;
