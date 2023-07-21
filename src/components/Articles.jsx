import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const {
          data: { articles: receivedArticles },
        } = await getAllArticles(topic);
        setArticles(receivedArticles);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
  }, [topic]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>Error..</p>;
  }
  return (
    <>
      <section className="card-group">
        <h1>{topic ? topic : "All"}</h1>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} articleData={article} />;
        })}
      </section>
    </>
  );
};

export default Articles;
