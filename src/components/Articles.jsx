import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { articles: receivedArticles },
        } = await getAllArticles();
        setArticles(receivedArticles);
        console.log(receivedArticles, "hello");
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
  return (
    <>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} articleData={article} />;
      })}
    </>
  );
};

export default Articles;