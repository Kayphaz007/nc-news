import { useEffect, useState } from "react";
import { getAllComments } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { comments: receivedComments },
        } = await getAllComments(article_id);
        setComments(receivedComments);
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
  //   show "no comments" for articles without comments
  if (comments.length === 0) {
    return <p>No comments to show - why not be the first to add one?</p>;
  }
  return (
    <>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
};

export default Comments;
