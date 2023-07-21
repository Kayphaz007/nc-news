import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Vote from "../components/Vote";
import Comments from "../components/Comments";

const SingleArticle = () => {
  const [article, setArticle] = useState("");
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState("");
  const [isLoadingComment, setIsLoadingComment] = useState(false);

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
      <CommentInputBox
        setCommentBody={setCommentBody}
        isLoadingComment={isLoadingComment}
        setIsLoadingComment={setIsLoadingComment}
        article_id={article_id}
        setComments={setComments}
      />
      <section>
        <h2>Comments</h2>
        <Comments
          commentBody={commentBody}
          isLoadingComment={isLoadingComment}
          comments={comments}
          setComments={setComments}
        />
      </section>
    </>
  );
};

export default SingleArticle;
