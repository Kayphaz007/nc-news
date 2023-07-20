import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { BsHandThumbsUp } from "react-icons/bs";
import Comments from "../components/Comments";

const SingleArticle = () => {
  const [article, setArticle] = useState("");
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
        console.log(err);
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
          <BsHandThumbsUp /> {votes}
        </footer>
      </section>
      <section>
        <h2>Comments</h2>
        <Comments />
      </section>
    </>
  );
};

export default SingleArticle;

// article_id
// :
// 12
// article_img_url
// :
// "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700"
// author
// :
// "tickle122"
// body
// :
// "The founder of the Node Security Project says Node.js still has common vulnerabilities, but progress has been made to make it more secure. Appearing at the recent Node Community Convention in San Francisco, project founder Adam Baldwin, chief security officer at Web consulting company &yet, emphasized risks, protections, and progress. Baldwin sees four risks within the Node ecosystem pertinent to the enterprise: the code dependency tree, bugs, malicious actors, and people. I think of [the dependency tree] more as the dependency iceberg, to be honest, Baldwin said, where your code is the ship and your dependencies that you have with your packaged JSON is that little tiny iceberg at the top. But developers need to be aware of the massive iceberg underneath, he stressed."
// comment_count
// :
// "7"
// created_at
// :
// "2020-11-15T13:25:00.000Z"
// title
// :
// "The battle for Node.js security has only begun"
// topic
// :
// "coding"
// votes
// :
// 0
